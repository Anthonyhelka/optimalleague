class Player < ApplicationRecord
  belongs_to :team

  validates :name, presence: true, uniqueness: true
  validates :role, presence: true
  validates :starter, presence: true
end
