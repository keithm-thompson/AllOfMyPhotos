# AllMyPhotos

[AllMyPhotos]  // to be changed
## Minimum Viable Product

AllMyPhotos is a web application inspired by Flickr built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
- [ ] Albums for organizing photos
- [ ] Tags
- [ ] View following feed
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md) 

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be uploaded, viewed, and destroyed through
the API.

- [ ] `Photo` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
- [ ] JBuilder views for photos
- Note components and respective Redux loops
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
- [ ] Style photo components
- [ ] Seed photos

### Phase 3: Albums (2 day)

**Objective:** Photos belong to Albums that can be created, viewed, edited and destroyed through the API.

- [ ] `Album` model and `PhotoAlbums` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for albums (`AlbumsController`)
- [ ] JBuilder views for albums
- [ ] Can add photo to multiple albums
- [ ] Viewing photos by album
- [ ] Style album components
- [ ] Seed albums

### Phase 4: Tags (1 days)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

- [ ] `Tag` model
- [ ] Fetching tags for photos
- [ ] Searching photos by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: - Pagination / infinite scroll for Photos Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Photos Index

- [ ] Paginate Photos Index API to send 50 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Add photos from social media
- [ ] Add Favorites to Photos
- [ ] Add Comments to Photos
- [ ] Multiple sessions

