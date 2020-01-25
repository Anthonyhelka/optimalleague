class Api::V1::LeagueController < ApplicationController
  # include ::ActionController::Serialization
  def fcs
    league = League.where("name": "FCS")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams)  }
  end

  def propel
    league = League.where("name": "Propel")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams)  }
  end

  def aspire
    league = League.where("name": "Aspire")[0]
    teams = league.teams.to_json(:include => [:players])
    render json: { min_rank: league.min_rank, max_rank: league.max_rank, teams: JSON.parse(teams)  }
  end
end
