class Bar < ApplicationRecord
  validates :name, presence: true
  belongs_to :route
end
