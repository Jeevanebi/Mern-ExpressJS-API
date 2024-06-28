# Simple Mern-ExpressJS-API
A Simple MERN Stack API using Express JS, Mongo DB for Beginners

# Vendor and User Management API

This is a Node.js application built with Express and MongoDB for managing vendors and users. The API allows for creating, reading, updating, and deleting vendors and users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Vendor Management:** Create, read, update, and delete vendor information.
- **User Management:** Create, read, update, and delete user information.
- **MongoDB Integration:** Uses MongoDB for data storage.
- **Express Framework:** Built with Express for handling HTTP requests.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running instance or connection string)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/vendor-user-management-api.git
    cd vendor-user-management-api
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure MongoDB connection:
    - Replace `YOUR_CONNECTION_STRING` in `app.js` with your actual MongoDB connection string.

4. Start the server:
    ```sh
    npm start
    ```
    - The server will start on `http://localhost:8080`.

## Usage

### Middleware

- `express.json()`: Middleware to parse JSON bodies from HTTP requests.

### MongoDB Configuration

- The MongoDB connection string is configured in the `app.js` file. Update the `mongoDbConnectionString` variable with your MongoDB connection string.

## API Endpoints

### Vendor Management

#### Get all vendors

- **Endpoint:** `GET /vendors`
- **Description:** Retrieve all vendors from the database.
- **Response:**
  ```json
  [
    {
      "from": "Location A",
      "location": "City A",
      "vendor": "Vendor A",
      "price": 100
    },
    ...
  ]
  ```

#### Get vendor by ID

- **Endpoint:** `GET /vendors/:id`
- **Description:** Retrieve a vendor by its ID.
- **Response:**
  ```json
  {
    "from": "Location A",
    "location": "City A",
    "vendor": "Vendor A",
    "price": 100
  }
  ```

#### Add a new vendor

- **Endpoint:** `POST /createvendor`
- **Description:** Add a new vendor to the database.
- **Request Body:**
  ```json
  {
    "from": "Location A",
    "location": "City A",
    "vendor": "Vendor A",
    "price": 100
  }
  ```
- **Response:**
  ```json
  {
    "from": "Location A",
    "location": "City A",
    "vendor": "Vendor A",
    "price": 100,
    "_id": "60c72b2f9b1d8c001f0e4e2e"
  }
  ```

#### Update a vendor

- **Endpoint:** `PUT /updatevendor/:id`
- **Description:** Update an existing vendor by its ID.
- **Request Body:**
  ```json
  {
    "from": "Location B",
    "location": "City B",
    "vendor": "Vendor B",
    "price": 200
  }
  ```
- **Response:**
  ```json
  "60c72b2f9b1d8c001f0e4e2e Updated Successfully."
  ```

#### Delete a vendor

- **Endpoint:** `DELETE /deletevendor/:tag`
- **Description:** Delete a vendor by a specific tag.
- **Request Query Parameters:**
  - `id`: Vendor ID to be deleted.
- **Response:**
  ```json
  "60c72b2f9b1d8c001f0e4e2e Deleted Successfully."
  ```

### User Management

#### Get all users

- **Endpoint:** `GET /users`
- **Description:** Retrieve all users from the database.
- **Response:**
  ```json
  [
    {
      "name": "User A",
      "phone": 1234567890,
      "gender": "Male"
    },
    ...
  ]
  ```

#### Get user by ID

- **Endpoint:** `GET /users/:id`
- **Description:** Retrieve a user by its ID.
- **Response:**
  ```json
  {
    "name": "User A",
    "phone": 1234567890,
    "gender": "Male"
  }
  ```

#### Add a new user

- **Endpoint:** `POST /createuser`
- **Description:** Add a new user to the database.
- **Request Body:**
  ```json
  {
    "name": "User A",
    "phone": 1234567890,
    "gender": "Male"
  }
  ```
- **Response:**
  ```json
  {
    "name": "User A",
    "phone": 1234567890,
    "gender": "Male",
    "_id": "60c72b2f9b1d8c001f0e4e2e"
  }
  ```

#### Update a user

- **Endpoint:** `PUT /updateuser/:id`
- **Description:** Update an existing user by its ID.
- **Request Body:**
  ```json
  {
    "name": "User B",
    "phone": 9876543210,
    "gender": "Female"
  }
  ```
- **Response:**
  ```json
  "60c72b2f9b1d8c001f0e4e2e Updated Successfully."
  ```

#### Delete a user

- **Endpoint:** `DELETE /deleteuser/:id`
- **Description:** Delete a user by ID.
- **Response:**
  ```json
  "60c72b2f9b1d8c001f0e4e2e Deleted Successfully."
  ```

## License

This project is licensed under the MIT License.
```

Feel free to adjust any sections as necessary to fit your project specifics.
