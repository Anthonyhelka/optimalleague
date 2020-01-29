class Api::V1::LeagueController < ApplicationController
  def fcs
    if Player.where(league_id: 1).length === 0 || Time.now - Player.first.updated_at > 7200
      data = get_player_stats("FCS")
      update_player_stats(data, 1)
    end
    league = League.where("name": "FCS")[0]
    teams = league.teams.to_json(:include => [:players])
    players = Player.where(league_id: 1).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams), players: JSON.parse(players) }
  end

  def propel
    if Player.where(league_id: 2).length === 0 || Time.now - Player.first.updated_at > 7200
      data = get_player_stats("PROPEL")
      update_player_stats(data, 2)
    end
    league = League.where("name": "Propel")[0]
    teams = league.teams.to_json(:include => [:players])
    players = Player.where(league_id: 2).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams), players: JSON.parse(players) }
  end

  def aspire
    if Player.where(league_id: 3).length === 0 || Time.now - Player.first.updated_at > 7200
      data = get_player_stats("ASPIRE")
      update_player_stats(data, 3)
    end
    league = League.where("name": "Aspire")[0]
    teams = league.teams.to_json(:include => [:players])
    players = Player.where(league_id: 3).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams), players: JSON.parse(players) }
  end
end
