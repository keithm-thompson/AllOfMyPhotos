## HeaderContainer  
### Header  
- SearchBar

**WelcomePage**  
- InspireMe

**SignIn||SignUp**  
- authForm  

**UsersFeedContainer**  
- UsersFeed  
 - PictureFeedIndex
 + PictureFeedIndexItem  
 * PictureFooter
 
**UsersPhotoOverviewContainer**  
- UsersPhotoOverview  
 + OptionsBar  
  **AddPhoto**  
   - NewPhoto  
  **PhotosContainer**  
   - Photos  
    - ViewPhoto  
     + **NewTag**  
      - Tags  
  **AlbumsContainer**  
   - Albums  
    + ViewAlbum  
     * ViewPhoto  
## Footer  


## Routes

|Path   | Component   | 
|-------|-------------|
| "/welcome" | "WelcomePage" |
| "/" | "UsersFeedContainer" |
| "/users/:id" | "UsersPhotoOverviewContainer" |
| "/users/:user_id/addphoto" | "AddPhoto" |
| "/users/:user_id/photos" | "PhotosContainer" |
| "/users/:user_id/albums" | "AlbumsContainer" |
| "/photos/:id" | "ViewPhoto" |
| "/photos/:id/tags" | "NewTag" |
| "/albums/:id" | "ViewAlbum" |
| "/search" | "SearchContainer" |
