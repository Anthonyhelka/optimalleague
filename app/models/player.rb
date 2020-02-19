class Player < ApplicationRecord
  belongs_to :league
  belongs_to :team, optional: true

  validates :name, presence: true, uniqueness: true
end
