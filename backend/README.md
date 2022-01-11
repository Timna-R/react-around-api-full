# Around the U.S. Back End  
  
## Directories  

The project is connected to the MongoDB database with Mongoose.

`/models` — Mongoose Schemas.  

`/controllers` — A collection of request handler functions responsible for interacting with a particular model.  

Using bcryptjs package to create Hashing the password.
Using jsonwebtoken package to create token (JWT).

`/routes` — routing files.  
  
All other directories are optional and may be created by the developer if necessary.

`middlewares` - 

`auth` - middleware for authorization, verify the token from the headers.  If everything's fine with the token, the middleware adding the token payload to the user object.
`validation` - middleware for validating requests - using celebrate package for validation of inbound server data.

`/errors` — error handling files.

  
## Running the Project  
  
`npm run start` — to launch the server.  
  
`npm run dev` — to launch the server with the hot reload feature.  

## Examples

POST create user - http://localhost:3000/signup

POST login - http://localhost:3000/signup

GET user by id - http://localhost:3000/users/me - If there is token

PATCH update user profile - http://localhost:3000/users/me - If there is token

PATCH update user avatar - http://localhost:3000/users/me/avatar - If there is token

GET cards list - http://localhost:3000/cards

POST create card - http://localhost:3000/cards

DELETE card dy id - http://localhost:3000/cards/:cardId

PUT/DELETE like or dislike a card - http://localhost:3000/cards/:cardId/likes


**GitHub**

Timna-R/react-around-api-full/backend



