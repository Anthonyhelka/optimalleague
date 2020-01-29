class Api::V1::LeagueController < ApplicationController
  # include ::ActionController::Serialization
  def fcs
    if Team.where(league_id: 1)[0].players.length === 0 || Time.now - Team.where(league_id: 1)[0].players[0].updated_at > 3600
      data = get_player_stats("FCS")
      update_player_stats(data, 1)
    end
    league = League.where("name": "FCS")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams) }
  end

  def propel
    if Team.where(league_id: 2)[0].players.length === 0 || Time.now - Team.where(league_id: 2)[0].players[0].updated_at > 3600
      data = get_player_stats("PROPEL")
      update_player_stats(data, 2)
    end
    league = League.where("name": "Propel")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams) }
  end

  def aspire
    if Team.where(league_id: 3)[0].players.length === 0 || Time.now - Team.where(league_id: 3)[0].players[0].updated_at > 3600
      data = get_player_stats("ASPIRE")
      update_player_stats(data, 3)
    end
    league = League.where("name": "Aspire")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams) }
  end
end
