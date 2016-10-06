# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

keith = User.create!(username: "keith", password: "starwars")
sennacy = User.create!(username: "sennacy", password: "starwars")
luna = User.create!(username: "luna", password: "starwars")
leen = User.create!(username: "leen", password: "starwars")
daniel = User.create!(username: "daniel", password: "starwars")
maurice = User.create!(username: "maurice", password: "starwars")
oscar = User.create!(username: "oscar", password: "starwars")
fred = User.create!(username: "fred", password: "starwars")
danielle = User.create!(username:"danielle", password:"starwars")

Following.destroy_all

keith_followed_sennacy = Following.create!(follower_id: keith.id, followed_id: sennacy.id)
keith_followed_luna = Following.create!(follower_id: keith.id, followed_id: luna.id)
keith_followed_leen = Following.create!(follower_id: keith.id, followed_id: leen.id)
keith_followed_daniel = Following.create!(follower_id: keith.id, followed_id: daniel.id)
keith_followed_danielle = Following.create!(follower_id: keith.id, followed_id: danielle.id)
maurice_followed_keith = Following.create!(follower_id: maurice.id, followed_id: keith.id)
danielle_followed_keith = Following.create!(follower_id: danielle.id, followed_id: keith.id)
