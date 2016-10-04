```js
{
  currentUser: {      
      id: 1,      
      username: "sample-state"      
    },      
    forms: {      
      signUp: { errors: [] },      
      logIn: { errors: [] },      
      createAlbum: { errors: [] },      
      addTag: { errors: [] }      
    },      
    photos: {      
      1: {      
        image_url: "something.png",      
        user_id: "1",      
        tags: {      
          1: {      
            id: 1,      
            name: "twitter"      
          }      
        }      
      }      
    },      
    albums: {      
      1: {      
        title: "My sample album",      
        description: "To simulate a real one",      
        user_id: 1      
      }      
    }      
  }      
```
