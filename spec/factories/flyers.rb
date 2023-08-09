FactoryBot.define do
  factory :flyer do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    user { FactoryBot.create(:user) }
  end
end