def store_teams(data, league_id)
  data.each do |team_data|
    team = Team.create(
      league_id: league_id,
      name: team_data[0],
      tag: team_data[1],
      group: team_data[2],
      wins: team_data[3],
      losses: team_data[4],
      roster: team_data[5].split(", ")
    )
    team.save
  end
  no_team = Team.create(
    league_id: league_id,
    name: "N/A",
    tag: "N/A",
    group: "N/A",
    wins: 0,
    losses: 0
  )
  no_team.save
end

def store_players(data, league_id)
  data.each do |player_data|
    if(Team.where(name: player_data[1], league_id: league_id).empty?)
      team_id = Team.where(name: "N/A", league_id: league_id)[0].id
    else
      team_id = Team.where(name: player_data[1], league_id: league_id)[0].id
    end
    player = Player.create(
      league_id: league_id,
      team_id: team_id,
      name: player_data[0],
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

desc "Update Teams"
task :update_teams => :environment do
  Team.delete_all

  session = GoogleDrive::Session.from_service_account_key("client_secret.json")

  teams_spreadsheet = session.spreadsheet_by_title("Website Strikeforce")

  fcs = teams_spreadsheet.worksheets.select { |worksheet| worksheet.title === "FCS" }[0].rows.drop(1)
  propel = teams_spreadsheet.worksheets.select { |worksheet| worksheet.title === "PROPEL" }[0].rows.drop(1)
  aspire = teams_spreadsheet.worksheets.select { |worksheet| worksheet.title === "ASPIRE" }[0].rows.drop(1)

  store_teams(fcs, 1)
  store_teams(propel, 2)
  store_teams(aspire, 3)
end

desc "Update Players"
task :update_players => :environment do
  Player.delete_all

  session = GoogleDrive::Session.from_service_account_key("client_secret.json")

  fcs_spreadsheet = session.spreadsheet_by_title("Focus Esports [FCS] - Stats")
  propel_spreadsheet = session.spreadsheet_by_title("Focus Esports [PROPEL] - Stats")
  aspire_spreadsheet = session.spreadsheet_by_title("Focus Esports [ASPIRE] - Stats")

  fcs = fcs_spreadsheet.worksheets.select { |worksheet| worksheet.title === "Overall" }[0].rows.drop(1)
  propel = propel_spreadsheet.worksheets.select { |worksheet| worksheet.title === "Overall" }[0].rows.drop(1)
  aspire = aspire_spreadsheet.worksheets.select { |worksheet| worksheet.title === "Overall" }[0].rows.drop(1)

  store_players(fcs, 1)
  store_players(propel, 2)
  store_players(aspire, 3)
end
