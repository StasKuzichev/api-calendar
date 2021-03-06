# API Calendar

Simple backend calendar
Allows you to register new user, login using existing credentials and manage user events.

## Requirements

1.  PostgreSQL Server v9.6+
2.  Create database ( default name: `calendar-db` )
3.  change `config.js` with your db connection options (defaults: username = `postgres`, password = `12345`)
4.  go to project root directory run `npm i`
5.  in project root directory run `db:init`

## Starting server

Go to the project root directory and run `npm run dev`

## API Endpoints:

* Create new User  
  _URL:_ `/api/users`  
  _Method:_ `POST`  
  _URL Params:_ `None`  
  _Body:_
  * **Required:**
    * `email[string]`
    * `password[string]`
  * **Optional:**
    * `name[string]`
* Refresh user access token  
  _URL:_ `/api/users/token/refresh`  
  _Method:_ `POST`  
  _URL Params:_ `None`  
  _Body:_

  * **Required:**
    * `accessToken[string]`
    * `refreshToken[string]`

* Login  
  _URL:_ `/api/auth`  
  _Method:_ `POST`  
  _URL Params:_ `None`  
  _Body:_
  * **Required:**
    * `email[string]`
    * `password[string]`
* Logout  
  _URL:_ `/api/auth/logout`  
  _Method:_ `POST`  
  _URL Params:_ `None`  
  _Body:_ `None`

* Get all event types  
  _URL:_ `/api/event-types`  
  _Method:_ `GET`  
  _URL Params:_ `None`  
  _Body:_ `None`

* Create new event  
  _URL:_ `/api/events`  
  _Method:_ `POST`  
  _URL Params:_ `None`  
  _Body:_
  * **Required:**
    * `type[integer]`
    * `startDate[format - 'YYYY-MM-DD HH:mm:ss']`
  * **Optional:**
    * `description[string]`
    * `endDate[format - 'YYYY-MM-DD HH:mm:ss']`
* Update event  
   _URL:_ `/api/events/:id`  
   _Method:_ `PUT`  
   _URL Params:_

  * **Required:**
    * `id[integer]`

  _Body:_

  * **Optional:**
    * `type[integer]`
    * `startDate[format - 'YYYY-MM-DD HH:mm:ss']`
    * `description`
    * `endDate[format - 'YYYY-MM-DD HH:mm:ss']`

* Delete event  
   _URL:_ `/api/events/:id`  
   _Method:_ `DELETE`  
   _URL Params:_

  * **Required:**
    * `id[integer]`

  _Body:_ `None`

* Get events for today  
   _URL:_ `/api/events/today/:offset?/:limit?`  
   _Method:_ `GET`  
   _URL Params:_

  * **Optional:**
    * `offset[integer]`
    * `limit[integer]`

  _Body:_ `None`

* Get events for current week  
   _URL:_ `/api/events/week/:offset?/:limit?`  
   _Method:_ `GET`  
   _URL Params:_

  * **Optional:**
    * `offset[integer]`
    * `limit[integer]`

  _Body:_ `None`

* Get events for current month  
  _URL:_ `/api/events/month/:offset?/:limit?`  
  _Method:_ `GET`  
  _URL Params:_

  * **Optional:**
    * `offset[integer]`
    * `limit[integer]`

  _Body:_ `None`

* Get events for current specific date  
  _URL:_ `/api/events/date/:date/:offset?/:limit?`  
  _Method:_ `GET`  
  _URL Params:_

  * **Required:**
    * `date[format - 'YYYY-MM-DD']`
  * **Optional:**
    * `offset[integer]`
    * `limit[integer]`

  _Body:_ `None`

  ## Auth:

  Bearer Token

