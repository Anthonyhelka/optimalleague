class League < ApplicationRecord
  has_many :teams

  validates :name, presence: true, uniqueness: true
  validates :min_rank, presence: true
  validates :max_rank, presence: true
end
