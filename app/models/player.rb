class Player < ApplicationRecord
  belongs_to :team

  validates :name, presence: true, uniqueness: true
  validates :starter, presence: true
end
