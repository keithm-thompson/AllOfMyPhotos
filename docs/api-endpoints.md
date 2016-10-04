#API End-Points
##HTML API
###Root
- GET / -  loads React web app
#JSON API
 
##Users
- POST /api/users
- PATCH /api/users
 
##Session
- GET /api/session
- POST /api/session
- DELETE /api/session
 
##Photos
- GET /api/photos
 - Photos index (only photos from people that the user follows)
 - accepts pagination params (if I get there)
- POST /api/photos
- GET /api/photos/:id
- DELETE /api/photos/:id
 
##Albums
- GET /api/users/:user_id/albums
- GET /api/albums/:id
- POST /api/albums
- DELETE /api/albums/:id
 
##Tags
- GET /api/photos/:photo_id/tags
- PATCH /api/photos/:photo_id/tags
- POST /api/tags
- DELETE /api/tags/:id
