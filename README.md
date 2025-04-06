# SuperMorpheus-Wisdom-Nugget
Backend API service to manage "Wisdom Nuggets"

---

##  Tech Stack
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Tools**: dotenv, nodemon

---

## Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/joel-noronha/wisdom.git
cd wisdom
```
### 2. Install Dependencies

```bash
npm install
```
## Database Setup & Configuration
### 1. Install MongoDB
- Local MongoDB Compass: Install MongoDB Compass and ensure it’s running.

### 2. Set Up Environment Variables
Create a .env file in the root of your project and add:
```bash
MONGO_URI=<your_mongodb_connection_string>/database-name
PORT=3000
```

### 3. Mongoose Schema Definition
The schema is defined in models/Nugget.js
```js
const mongoose = require("mongoose");

const nuggetSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Nugget", nuggetSchema);

```

## Seed the Database
To pre-populate with sample wisdom nuggets:
```bash
npm run seed
```

## Run the Server
```bash
npm run dev
```


## API Endpoints
### 3. GET /nuggets
Url of endpoint: `http://localhost:3000/nuggets/`

Output:
Status: 200 OK
```json
{
  "data": [
    {
      "_id": "67efe3d4e15d83fdd25c5efb",
      "text": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon",
      "__v": 0,
      "createdAt": "2025-04-04T13:51:16.520Z",
      "updatedAt": "2025-04-04T13:51:16.520Z"
    }
  ]
}
```

### 3. GET /nuggets/random
Url of endpoint: `http://localhost:1000/nuggets/random`

Output:
Status: 200 OK
```json
{
  "data": {
    "_id": "67efe3d4e15d83fdd25c5efb",
    "text": "Life is what happens when you're busy making other plans.",
    "author": "John Lennon",
    "__v": 0,
    "createdAt": "2025-04-04T13:51:16.520Z",
    "updatedAt": "2025-04-04T13:51:16.520Z"
  }
}
```


### 3. POST /nuggets
Url of endpoint: `http://localhost:1000/nuggets/random`

Input in body json format:
```json
{
  "text":"The purpose of our lives is to be happy.",
  "author":"Dalai Lama"
}
```
Output:
Status: 201 Created
```json
{
  "id": "67f26f04896d8b7afa5f77c7",
  "text": "The purpose of our lives is to be happy.",
  "author": "Dalai Lama"
}
```
### 3. DELETE /nuggets/{id}
Url of endpoint: `http://localhost:1000/nuggets/<id>`

Output:
Status: 200 OK
```json
{
  "message": "Nugget deletion success"
}
```

