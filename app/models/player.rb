class Player < ApplicationRecord
  belongs_to :league
  belongs_to :team

  validates :name, presence: true, uniqueness: true
end
