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

Photo.destroy_all

danielle_one = Photo.create!(image: File.open("app/assets/images/danielle-one.jpeg"), user_id: danielle.id)
sennacy_four = Photo.create!(image: File.open("app/assets/images/sennacy-four.jpeg"), user_id: sennacy.id)
keith_four = Photo.create!(image: File.open("app/assets/images/keith-four.jpeg"), user_id: keith.id)
luna_one = Photo.create!(image: File.open("app/assets/images/luna-one.jpeg"), user_id: luna.id)
danielle_two = Photo.create!(image: File.open("app/assets/images/danielle-two.jpeg"), user_id: danielle.id)
keith_two = Photo.create!(image: File.open("app/assets/images/keith-two.jpeg"), user_id: keith.id)
maurice_five = Photo.create!(image: File.open("app/assets/images/maurice-five.jpeg"), user_id: maurice.id)
luna_three = Photo.create!(image: File.open("app/assets/images/luna-three.jpeg"), user_id: luna.id)
sennacy_three = Photo.create!(image: File.open("app/assets/images/sennacy-three.jpeg"), user_id: sennacy.id)
luna_four = Photo.create!(image: File.open("app/assets/images/luna-four.jpeg"), user_id: luna.id)
sennacy_one = Photo.create!(image: File.open("app/assets/images/sennacy-one.jpeg"), user_id: sennacy.id)
keith_five = Photo.create!(image: File.open("app/assets/images/keith-five.jpeg"), user_id: keith.id)
maurice_three = Photo.create!(image: File.open("app/assets/images/maurice-three.jpeg"), user_id: maurice.id)
keith_three = Photo.create!(image: File.open("app/assets/images/keith-three.jpeg"), user_id: keith.id)
maurice_four = Photo.create!(image: File.open("app/assets/images/maurice-four.jpeg"), user_id: maurice.id)
danielle_three = Photo.create!(image: File.open("app/assets/images/danielle-three.jpeg"), user_id: danielle.id)
maurice_one = Photo.create!(image: File.open("app/assets/images/maurice-one.jpeg"), user_id: maurice.id)
danielle_five = Photo.create!(image: File.open("app/assets/images/danielle-five.jpeg"), user_id: danielle.id)
luna_two = Photo.create!(image: File.open("app/assets/images/luna-two.jpeg"), user_id: luna.id)
sennacy_two = Photo.create!(image: File.open("app/assets/images/sennacy-two.jpeg"), user_id: sennacy.id)
danielle_four = Photo.create!(image: File.open("app/assets/images/danielle-four.jpeg"), user_id: danielle.id)
sennacy_five = Photo.create!(image: File.open("app/assets/images/sennacy-five.jpeg"), user_id: sennacy.id)
maurice_two = Photo.create!(image: File.open("app/assets/images/maurice-two.jpeg"), user_id: maurice.id)
luna_five = Photo.create!(image: File.open("app/assets/images/luna-five.jpeg"), user_id: luna.id)
keith_one = Photo.create!(image: File.open("app/assets/images/keith-one.jpeg"), user_id: keith.id)
