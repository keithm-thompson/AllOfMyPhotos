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

danielle_one = Photo.create!(image: File.open("app/assets/images/danielle-one.jpeg"),title: Faker::Hipster.sentence, user_id: danielle.id)
sennacy_four = Photo.create!(image: File.open("app/assets/images/sennacy-four.jpeg"),title: Faker::Hipster.sentence, user_id: sennacy.id)
keith_four = Photo.create!(image: File.open("app/assets/images/keith-four.jpeg"),title: Faker::Hipster.sentence, user_id: keith.id)
luna_one = Photo.create!(image: File.open("app/assets/images/luna-one.jpeg"),title: Faker::Hipster.sentence, user_id: luna.id)
danielle_two = Photo.create!(image: File.open("app/assets/images/danielle-two.jpeg"),title: Faker::Hipster.sentence, user_id: danielle.id)
keith_two = Photo.create!(image: File.open("app/assets/images/keith-two.jpeg"),title: Faker::Hipster.sentence, user_id: keith.id)
maurice_five = Photo.create!(image: File.open("app/assets/images/maurice-five.jpeg"),title: Faker::Hipster.sentence, user_id: maurice.id)
luna_three = Photo.create!(image: File.open("app/assets/images/luna-three.jpeg"),title: Faker::Hipster.sentence, user_id: luna.id)
sennacy_three = Photo.create!(image: File.open("app/assets/images/sennacy-three.jpeg"),title: Faker::Hipster.sentence, user_id: sennacy.id)
luna_four = Photo.create!(image: File.open("app/assets/images/luna-four.jpeg"),title: Faker::Hipster.sentence, user_id: luna.id)
sennacy_one = Photo.create!(image: File.open("app/assets/images/sennacy-one.jpeg"),title: Faker::Hipster.sentence, user_id: sennacy.id)
keith_five = Photo.create!(image: File.open("app/assets/images/keith-five.jpeg"),title: Faker::Hipster.sentence, user_id: keith.id)
maurice_three = Photo.create!(image: File.open("app/assets/images/maurice-three.jpeg"),title: Faker::Hipster.sentence, user_id: maurice.id)
keith_three = Photo.create!(image: File.open("app/assets/images/keith-three.jpeg"),title: Faker::Hipster.sentence, user_id: keith.id)
maurice_four = Photo.create!(image: File.open("app/assets/images/maurice-four.jpeg"),title: Faker::Hipster.sentence, user_id: maurice.id)
danielle_three = Photo.create!(image: File.open("app/assets/images/danielle-three.jpeg"),title: Faker::Hipster.sentence, user_id: danielle.id)
maurice_one = Photo.create!(image: File.open("app/assets/images/maurice-one.jpeg"),title: Faker::Hipster.sentence, user_id: maurice.id)
danielle_five = Photo.create!(image: File.open("app/assets/images/danielle-five.jpeg"),title: Faker::Hipster.sentence, user_id: danielle.id)
luna_two = Photo.create!(image: File.open("app/assets/images/luna-two.jpeg"),title: Faker::Hipster.sentence, user_id: luna.id)
sennacy_two = Photo.create!(image: File.open("app/assets/images/sennacy-two.jpeg"),title: Faker::Hipster.sentence, user_id: sennacy.id)
danielle_four = Photo.create!(image: File.open("app/assets/images/danielle-four.jpeg"),title: Faker::Hipster.sentence, user_id: danielle.id)
sennacy_five = Photo.create!(image: File.open("app/assets/images/sennacy-five.jpeg"),title: Faker::Hipster.sentence, user_id: sennacy.id)
maurice_two = Photo.create!(image: File.open("app/assets/images/maurice-two.jpeg"),title: Faker::Hipster.sentence, user_id: maurice.id)
luna_five = Photo.create!(image: File.open("app/assets/images/luna-five.jpeg"),title: Faker::Hipster.sentence, user_id: luna.id)
keith_one = Photo.create!(image: File.open("app/assets/images/keith-one.jpeg"),title: Faker::Hipster.sentence, user_id: keith.id)

Album.destroy_all

keith_album = Album.create!(title: Faker::Hipster.sentence, user_id: keith.id)
danielle_album = Album.create!(title: Faker::Hipster.sentence, user_id: danielle.id)
luna_album = Album.create!(title: Faker::Hipster.sentence, user_id: luna.id)
sennacy_album = Album.create!(title: Faker::Hipster.sentence, user_id: sennacy.id)
maurice_album = Album.create!(title: Faker::Hipster.sentence, user_id: maurice.id)

AlbumPhoto.destroy_all

keith_add_photo_to_album_one = AlbumPhoto.create!(album_id: keith_album.id, photo_id: keith_one.id)
keith_add_photo_to_album_two = AlbumPhoto.create!(album_id: keith_album.id, photo_id: keith_two.id)
danielle_add_photo_to_album_one = AlbumPhoto.create!(album_id: danielle_album.id, photo_id: danielle_one.id)
danielle_add_photo_to_album_two = AlbumPhoto.create!(album_id: danielle_album.id, photo_id: danielle_two.id)
sennacy_add_photo_to_album_one = AlbumPhoto.create!(album_id: sennacy_album.id, photo_id: sennacy_one.id)
sennacy_add_photo_to_album_two = AlbumPhoto.create!(album_id: sennacy_album.id, photo_id: sennacy_two.id)
maurice_add_photo_to_album_one = AlbumPhoto.create!(album_id: maurice_album.id, photo_id: maurice_one.id)
maurice_add_photo_to_album_two = AlbumPhoto.create!(album_id: maurice_album.id, photo_id: maurice_two.id)
luna_add_photo_to_album_one = AlbumPhoto.create!(album_id: luna_album.id, photo_id: luna_one.id)
luna_add_photo_to_album_two = AlbumPhoto.create!(album_id: luna_album.id, photo_id: luna_two.id)
