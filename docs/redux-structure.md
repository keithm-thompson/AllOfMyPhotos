## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Photo Cycles

### Photos API Request Actions

* `fetchFollowersPhotos`
  0. invoked from `UsersFeedContainer` `didMount`
  0. `GET /api/photos` is called.
  0. `receivePhotos` is set as the success callback.

* `uploadPhoto`
  0. invoked from upload photo button `onClick`
  0. `POST /api/photos` is called.
  0. `reroutes to /api/users/:id/photos in success callback.

* `fetchUsersPhotos`
  0. invoked from `PhotosContainer` `didMount`
  0. `GET /api/users/:id/photos` is called.
  0. `receivePhotos` is set as the success callback.

* `fetchPhoto`
  0. invoked from `ViewPhoto` `didMount`
  0. `GET /api/photos/:id` is called.
  0. `removePhoto` is set as the success callback.

* `deletePhoto`
  0. invoked from delete photo button `onClick`
  0. `DELETE /api/photos/:id` is called.
  0. `removePhoto` is set as the success callback.

### Photos API Response Actions

* `receivePhotos`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos` in the application's state.

* `receivePhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` updates `photos[id]` in the application's state.

* `removePhoto`
  0. invoked from an API callback
  0. the `PhotoReducer` removes `photos[id]` from the application's state.

## Album Cycles

### Albums API Request Actions

* `fetchUsersAlbums`
  0. invoked from `AlbumsContainer` `didMount`
  0. `GET /api/users/:id/albums` is called.
  0. `receiveUsersAlbums` is set as the success callback.

* `createAlbum`
  0. invoked from new album button `onClick`
  0. `POST /api/albums` is called.
  0. `receiveAlbum` is set as the callback.

* `fetchOneAlbum`
  0. invoked from `ViewAlbum` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveOneAlbum` is set as the success callback.

* `addPhotoToAlbum`
  0. invoked from  add to album button`onClick`
  0. `PATCH /api/albums/:id` is called.
  0. `receivePhoto` is set as the success callback.

* `deletePhotoFromAlbum`
  0. invoked from remove photo button `onClick`
  0. `PATCH /api/albums/:id` is called.
  0. `removePhoto` is set as the success callback.

* `updateAlbum`
  0. invoked from edit form `onSubmit`
  0. `PATCH /api/albums/:id` is called.
  0. `receiveAlbum` is set as the success callback.

* `deleteAlbum`
  0. invoked from delte album button `onClick`
  0. `DELETE /api/albums/:id` is called.
  0. `removeAlbum` is set as the success callback.

### Albums API Response Actions

* `receiveUsers`
  0. invoked from an API callback.
  0. The `AlbumReducer` updates `albums` in the application's state.

* `receiveAlbum`
  0. invoked from an API callback.
  0. The `AlbumReducer` updates `albums[id]` in the application's state.

* `removeAlbum`
  0. invoked from an API callback.
  0. The `AlbumReducer` removes `albums[id]` from the application's state.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onSubmit`
  0. `GET /api/users` is called with `text` param as default.
  0. `GET /api/tags` is called with `text` param if photos is selected.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestionReducer` updates `suggestions` in the application's state.
