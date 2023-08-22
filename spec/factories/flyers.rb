FactoryBot.define do
  factory :flyer do
    title { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph }
    user { FactoryBot.create(:user) }
    private { false }

    factory :private_flyer do
      private { true }
    end
  end
end