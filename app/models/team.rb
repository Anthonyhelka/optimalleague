class Team < ApplicationRecord
  belongs_to :league
  belongs_to :group
  has_many :players

  validates :name, presence: true
  validates :tag, presence: true
  validates :wins, presence: true
  validates :losses, presence: true
end
