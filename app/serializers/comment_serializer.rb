class CommentSerializer
  include JSONAPI::Serializer
  attributes :flyer_id, :body
end
