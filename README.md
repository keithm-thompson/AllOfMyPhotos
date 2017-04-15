# AllOfMyPhotos

[AllOfMyPhotos] (https://www.allofmyphotos.io) is a full-stack web application inspired by Flickr. It is built on a Ruby on Rails backend, connected to a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

![AllOfMyPhotos](/docs/welcome.png)

## Features & Implementation

### Followers Feed

On login, an API call is made and a  SQL query is executed to fetch all of the current-user's follower's photos, ordered by upload date (descending). A user can click on any photo or user to redirect them to the singular photo view or users show page respectively. 

![Followers_Feed](/docs/followers_feed.png)

### Search

From any view on the app, users may perform a search. When a user begins typing into the search bar, a drop down menu will appear, allowing selection of users or tags.

#### Users Search

When a user chooses to search for other users to follow - a smart search is performed. A custom SQL query is executed so that there are always many results, but the ones with the highest matches are prioritized. Users can follow/unfollow from the search landing page and view other user's pages. 

![Users_Search](/docs/users_search.png)
#### Tags Search

Utilizes the [Big Huge Thesaurus API] (https://words.bighugelabs.com/api.php) to allow users to perform powerful tag searches. Upon executing a tag search, all photos with the tag or the tags synonyms, will be shown, allowing users to click and view the photo and the user that uploaded it.

![Tag_Search](/docs/tag_search.png)
### Uploading Photos

Users can upload photos with ease and comfort knowing that their memories are backed by AWS S3. Behind the scenes, before the photo is saved to AWS, it is compressed (lossless) using the image-optim gem, so that load times are reduced for high quality photos. 

### Viewing and Organizing Photos

![View_Photos](/docs/view_photos.png)

After a photo is uploaded, it can always be found through a user's profile. Optionally, users can also organize their photos in albums. Through a clear navigation menu bar on the user's profile, a user can access all of their albums, create new ones, and edit existing ones.

![View_Albums](/docs/view_albums.png)

Clicking a photo in any of these views will navigate a user to go to the view photo page, allowing them to add tags, zoom in on photos, and delete them.   

![View_Photo](/docs/view_photo.png)
## Future Plans

- [ ] Integrate social media API's so that a person's entire social footprint can be automatically stored and accessed in an easy way
- [ ] Allow users to form groups with each other
