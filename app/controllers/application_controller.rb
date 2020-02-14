class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :get_player_stats
  helper_method :update_player_stats

  def get_player_stats(desired_league)
    session = GoogleDrive::Session.from_service_account_key("client_secret.json")
    spreadsheet = session.spreadsheet_by_title("Focus Esports [#{desired_league}] - Stats")
    overall_stats = spreadsheet.worksheets.select { |worksheet| worksheet.title === "Overall" }
    return overall_stats[0].rows
  end

  def update_player_stats(data, league_id)
    data.drop(1).each do |player_data|
      if Player.where(name: player_data[0]).exists?
        player = Player.find_by(name: player_data[0])
        player.update(
          name: player_data[0],
          league_id: league_id,
          team_id: Team.where(name: player_data[1], league_id: league_id)[0].id,
          role: player_data[2],
          kills: player_data[3],
          deaths: player_data[4],
          assists: player_data[5],
          games_played: player_data[30],
          ier: player_data[31],
          updated_at: Time.now
        )
      else
        player = Player.create(
          name: player_data[0],
          league_id: league_id,
          team_id: Team.where(name: player_data[1])[0].id,
          role: player_data[2],
          kills: player_data[3],
          deaths: player_data[4],
          assists: player_data[5],
          games_played: player_data[30],
          ier: player_data[31]
        )
        player.save
      end
    end
  end
end
