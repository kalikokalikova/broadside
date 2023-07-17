# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Flyer.destroy_all
Comment.destroy_all

flyers = Flyer.create([
  {
    title: "A really great party",
    description: "It's going to be so fun."
  },
  {
    title: "Post part hang",
    description: "For musicians and groupies only, no normies"
  },
  {
    title: "Wednesday night dancing",
    description: "Live music, don't know the band tho"
  },
  {
    title: "Potluck",
    description: "Victorian themed. Bring tiny sandwiches."
  }
])

comments = Comment.create([
  {
    body: "I hate sandwiches",
    flyer_id: 4
  },
  {
    body: "AM I TTOO NORMAL FOR THIS???",
    flyer_id: 2
  }
])