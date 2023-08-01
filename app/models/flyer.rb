class Flyer < ApplicationRecord
  has_many :comments
  belongs_to :user

  def as_json(option = {})
    super(option.merge(include: :comments))
  end
end
