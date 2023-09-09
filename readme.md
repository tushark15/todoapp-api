# TodoApp API

This is a RESTful API for managing Todo items.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before running the project, make sure you have the followin software installed

- [Node.js](https://nodejs.org/en) (v18 or later)
- [MongoDB](https://www.mongodb.com/) or [Mongo Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/tushark15/todoapp-api.git
   ```

2. Navigate to the project directory  
   `cd todoapp-api`
3. Install the dependencies  
    `npm install`  
    or  
    `yarn install`

4. Create a `.env` file in the project root directory and configure your environment vatiables.  
5. Start the Express.js server:  
    `npm start`  
    or  
    `yarn start`

The server should now be running on [http://localhost:3000/](http://localhost:3000/)

## Usage

- Use a tool like Postman to interact with the API endpoints
- Refer to the API documentaion section below for details on available endpoints.

## API Documentation

The API is documented using Swagger. You can access the SwaggerUI for interactive documentation at:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Configuration

You can configure the application by modifying the `.env` file. This file includes environment-specific settings such as database connection details.

Make a variable named `MONGOURL` and set you monogodb connection url with a valid username and password.
