Rails.application.routes.draw do
  root "focus#home"

  get "home", to: "focus#home", as: "home"
  get "about", to: "focus#about", as: "about"

  get "leagues", to: "league#leagues", as: "leagues"
  get "standings", to: "league#standings", as: "standings"
  get "stats", to: "league#stats", as: "stats"

  namespace :api do
    namespace :v1 do
      get "league/fcs", to: "league#fcs", as: "fcs"
      get "league/propel", to: "league#propel", as: "propel"
      get "league/aspire", to: "league#aspire", as: "aspire"
    end
  end
end
