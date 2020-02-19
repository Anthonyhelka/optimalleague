class League < ApplicationRecord
  has_many :teams
  has_many :players

  validates :name, presence: true, uniqueness: true
  validates :min_rank, presence: true
  validates :max_rank, presence: true
  validates :standings_url, presence: true
  validates :stats_url, presence: true
end
