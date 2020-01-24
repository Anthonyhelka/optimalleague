class Team < ApplicationRecord
  belongs_to :league
  has_many :players

  validates :name, presence: true, uniqueness: true
  validates :tag, presence: true, uniqueness: true
  validates :group, presence: true
  validates :wins, presence: true
  validates :losses, presence: true
end
