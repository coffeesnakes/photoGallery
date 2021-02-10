# photo_gallery

> `Sonic Design photo gallery service`

## Related Projects

  - https://github.com/Sonic-Design/checkout-calendar
  - https://github.com/Sonic-Design/photo-carousel
  - https://github.com/Sonic-Design/reviews

## Requirements

- [PostgreSQL](https://www.postgresql.org/download/)
- [New-Relic] configuration file is in the root directory.


- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:
```sh
npm i -g webpack
npm i
```

## Usage
- `npm run seed` will generate mock data CSV files according to `data generating scripts` within the database.
*May need to adjust Node's allocated RAM within package.json.
- Load the CSV files into the database within the postgres-db folder: `psql -U postgres -h 127.0.0.1 -f schema.sql`
- Start the server using `npm start`
- Start the client using `npm run react`


</br>

## PhotoGallery API

</br>

### Select home matching a Home ID

-GET `/api/galleries/:galleryId`

**Success Status Code:** `200`


**Returns:** Array of JSON home objects.

```json
    {
      isSuperhost: Boolean,
      reviews: Boolean,
      rating: INT,
    }

```

## _HOME API_

-GET `/api/Home/:homeId`

**Path Parameters:**
- `id` - Home ID

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  rating: INT,
  isSuperhost: Boolean,
  location: {
    city: String,
    state: String,
    country: String,
  }
}
```

-POST `/api/Home`

**Path Parameters:**
- `id` - Home ID

**Request Body**
```json
{
  rating: INT,
  isSuperhost: Boolean,
  location: {
    city: String,
    state: String,
    country: String,
  }
}
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully added a home"
    }
```

```json
    {
      "message": "Failed to add a home."
    }
```

</br>

-PUT `/api/Home/:homeId`

**Path Parameters:**
- `id` - Home ID

**Request Body**
*
```json
 {
    city: String,
    state: String,
    country: String,

  }
  ```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a home"
    }
```

```json
    {
      "message": "Failed to update a home."
    }
```
</br>

-DELETE `/api/Home/:homeId`

###Path parameters:

**Request Body**
*

   ```id``` Home ID


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a home"
    }
```

```json
    {
      "message": "Failed to deleted a home."
    }
```

</br>

## __Photo API__

</br>

### Add a photo

- POST `/api/photos`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  user_id: INT,
  photo_url: String,
  upload_date: String,
  caption: String,
  time_posted: Timestamp,
}
```
## Delete photos matching photo id

- DELETE `/api/photos/:photoId`

**Path Parameters:**

- `id` - Photo ID

**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a photo"
    }
```

```json
    {
      "message": "Failed to deleted a photo."
    }
```

</br>

## __USER API__
 </br>

## Add a user

- POST `/api/users`

**Success Status Code:** `201`


**Request Body**: Expects JSON with the following keys.

```json
{
  username: String,
  email: String,
  hashed_password: String,
  ip: String
}
```
</br>

-GET `/api/users/:userId`

**Path Parameters:**
- `id` - user ID

**Success Status Code:** `200`


**Returns:** Expects JSON with the following keys.

```json
{
  user_id: INT,
  username: String,
  email: String,
  hashed_password: String,
  ip: String
}
```
</br>

-PUT `/api/users/:userId`

**Path Parameters:**
- `id` - user ID

**Request Body**
*
```json
{
  user_id: INT,
  username: String,
  email: String,
  hashed_password: String,
  ip: String
}
```

### Path responses:
**Success Status Code:** `201`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully updated a user"
    }
```

```json
    {
      "message": "Failed to update a user."
    }
```

</br>

-DELETE `/api/user/:deleteId`

**Path Parameters:**
- `id` - user ID

**Request Body**

   ```id``` user ID


### Path responses:
**Success Status Code:** `204`


### Response format:
* Returns: JSON

```json
    {
      "message": "Successfully deleted a user from database."
    }
```

```json
    {
      "message": "Failed to deleted a user from database."
    }
```