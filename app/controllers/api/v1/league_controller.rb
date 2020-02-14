class Api::V1::LeagueController < ApplicationController
  def fcs
    league = League.where(name: "FCS")[0]
    teams = league.teams.reject { |team| team[:name] == "N/A" }
    players = Player.where(league_id: 1).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: teams, players: JSON.parse(players) }
  end

  def propel
    league = League.where(name: "Propel")[0]
    teams = league.teams.reject { |team| team[:name] == "N/A" }
    players = Player.where(league_id: 2).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: teams, players: JSON.parse(players) }
  end

  def aspire
    league = League.where(name: "Aspire")[0]
    teams = league.teams.reject { |team| team[:name] == "N/A" }
    players = Player.where(league_id: 3).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: teams, players: JSON.parse(players) }
  end
end
