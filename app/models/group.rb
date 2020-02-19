class Group < ApplicationRecord
  belongs_to :league
  has_many :teams

  validates :name, presence: true
end
