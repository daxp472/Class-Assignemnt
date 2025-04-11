# Express Server with Modular Routing and JWT Authentication

This project sets up an Express server with modular routing, role-based access control, user authentication, and token-based validation using JWT.

## Features

* Modular Routing: Routes are separated into different files for better maintainability.
* JWT Authentication: Secure access to routes with JWT tokens.
* Role-based Access Control: Restrict access based on user roles (admin, user).
* CRUD Operations: Implemented basic CRUD functionality for managing users.

## Setup Instructions

### Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Set the following environment variables in your `.env` file:

```ini
SECRET_KEY=<your-secret-key>
ACCESS_TOKEN_SECRET=<your-access-token-secret>
```

### Run the Server

```bash
npm start
```

The server will start on port 3000. You can modify the port in the `server.js` file if needed.

## Key Files

* `server.js`: Main entry point that initializes the Express app and loads routes.
* `task/server1.js`, `task/server2.js`, ...: Modular route handlers (e.g., user authentication, role-based routes, etc.).
* `authMiddleware.js`: Middleware for authenticating JWT tokens and checking user roles.

## Example Routes

* `POST /login`: User login to receive a JWT token.
* `GET /admin-only`: Protected route, accessible only by users with the admin role.
* `GET /user-only`: Protected route, accessible only by users with the user role.
* `POST /users`: Create a new user.
* `PUT /users/:id`: Update user information.
* `PATCH /users/:id`: Partially update user information.
* `DELETE /users/:id`: Delete a user.

## Notes

* All routes require a valid JWT token in the Authorization header.
* Role-based routes (`/admin-only`, `/user-only`) require a valid role in the JWT token.