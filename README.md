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

**Failure Status Code:** `404`

**Returns:** Array of JSON home objects.

```json
    {
      home_id: INT,
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

**Failure Status Code:** `404`

**Returns:** Expects JSON with the following keys.

```json
{
  id: INT,
  rating: INT,
  isSuperhost: Boolean,
  location: {
    city: VARCHAR(200),
    state: VARCHAR(200),
    country: VARCHAR(200),
  }
}
```

-POST `/api/Home`

###Path parameters:

**Request Body**
```json
{
  rating: INT,
  isSuperhost: Boolean,
  location: {
    city: VARCHAR(200),
    state: VARCHAR(200),
    country: VARCHAR(200),
  }
}
  ```

### Path responses:
**Success Status Code:** `200`

**Failure Status Code:** `404`

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

-PUT `/api/Home`

###Path parameters:

**Request Body**
*
```json
 {
    home_id: INT,
    city: VARCHAR(200),
    state: VARCHAR(200),
    country: VARCHAR(200),

  }
  ```

### Path responses:
**Success Status Code:** `200`

**Failure Status Code:** `404`

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
**Success Status Code:** `200`

**Failure Status Code:** `404`

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

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Request Body**: Expects JSON with the following keys.

```json
{
  photo_id: INT,
  user_id: INT,
  photo_url: VARCHAR(200),
  upload_date: VARCHAR(200),
  caption: VARCHAR(200),
  time_posted: Timestamp,
}
```
## Delete photos matching photo id

- DELETE `/api/photos/:id`

**Path Parameters:**

- `id` - photo id

**Success Status Code:** `200`

**Failure Status Code:** `404`

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

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Request Body**: Expects JSON with the following keys.

```json
{
  user_id: INT,
  username: VARCHAR(25),
  email: VARCHAR(200),
  hashed_password: VARCHAR(255),
  ip: VARCHAR(30)
}
```
</br>

-GET `/api/users/:id`

**Path Parameters:**
- `id` - user ID

**Success Status Code:** `200`

**Failure Status Code:** `404`

**Returns:** Expects JSON with the following keys.

```json
{
  user_id: INT,
  username: VARCHAR(25),
  email: VARCHAR(200),
  hashed_password: VARCHAR(255),
  ip: VARCHAR(30)
}
```
</br>

-PUT `/api/users`

###Path parameters:

**Request Body**
*
```json
{
  user_id: INT,
  username: VARCHAR(25),
  email: VARCHAR(200),
  hashed_password: VARCHAR(255),
  ip: VARCHAR(30)
}
```

### Path responses:
**Success Status Code:** `200`

**Failure Status Code:** `404`

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

###Path parameters:

**Request Body**
*

   ```id``` user ID


### Path responses:
**Success Status Code:** `200`

**Failure Status Code:** `404`

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