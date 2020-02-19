class Api::V1::LeagueController < ApplicationController
  def fcs
    league = League.where(name: "FCS")[0]
    groups = league.groups.to_json(:include => [:teams])
    players = Player.where(league_id: 1).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, standings_url: league.standings_url, stats_url: league.stats_url,  groups: JSON.parse(groups), players: JSON.parse(players) }
  end

  def propel
    league = League.where(name: "Propel")[0]
    groups = league.groups.to_json(:include => [:teams])
    players = Player.where(league_id: 2).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, standings_url: league.standings_url, stats_url: league.stats_url,  groups: JSON.parse(groups), players: JSON.parse(players) }
  end

  def aspire
    league = League.where(name: "Aspire")[0]
    groups = league.groups.to_json(:include => [:teams])
    players = Player.where(league_id: 3).to_json(:include => [:team])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, standings_url: league.standings_url, stats_url: league.stats_url,  groups: JSON.parse(groups), players: JSON.parse(players) }
  end
end
