class FlyerSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description
  has_many :comments
end
