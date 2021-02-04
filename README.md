# photo_gallery

> `Sonic Design photo gallery service`

## Related Projects

  -
  -
  -

## Requirements

- [PostgreSQL](https://www.postgresql.org/download/)

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:
```sh
npm i -g webpack
npm i
```

## Usage
-Start server * client using npm run dev:react npm run start

- **update this with seeding script to generate mock data in a CSV file

</br>

## PhotoGallery API

</br>

### Select home matching a Home ID

-GET `/api/galleries/:id`

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

-GET `/api/Home/:id`

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

-PUT `/api/Home/:id`

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

-DELETE `/api/Home/:id`

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

- DELETE `/api/photos/:id`

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

-GET `/api/users/:id`

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

-PUT `/api/users/:id`

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
-DELETE `/api/user/:id`

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