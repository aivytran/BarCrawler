class Route < ApplicationRecord
  # serialize :bars

  validates :name, :user_id, presence: true
  belongs_to :user
  has_many :bars

end
