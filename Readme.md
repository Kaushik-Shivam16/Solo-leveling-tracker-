# Solo Leveling Tracker

A web application to manage user details, including avatar uploads, with secure session management.

## Features
- User signup with avatar upload.
- Secure session management for 30 days.
- Easy-to-update user details.

## Technology Stack
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React
- **Authentication**: JWT

## Setup Instructions

### Backend
1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: `npm install`.
3. Start the server: `node server.js`.

### Frontend
1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Start the React app: `npm start`.

## API Endpoints
- `POST /api/users/signup`: User signup with avatar upload.
- `PUT /api/users/:id`: Update user details.

## To Do
- Add secure session handling.
- Implement user authentication.

## License
MIT
