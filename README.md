# NoteZipper Containerized

This project has been containerized with Docker and uses PM2 for process management.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git (to clone the repository)

## Running with Docker Compose

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a `.env` file with the required environment variables:

   ```
   JWT_SECRET=your_jwt_secret_here
   ```

3. Build and start the containers:

   ```
   docker-compose up -d --build
   ```

4. Access the application at http://localhost:5000

## Manual Docker Build

If you prefer to build and run the Docker container manually:

1. Build the Docker image:

   ```
   docker build -t notezipper .
   ```

2. Run the container:
   ```
   docker run -p 5000:5000 -e MONGO_URI=your_mongo_uri -e JWT_SECRET=your_jwt_secret notezipper
   ```

## Stopping the Application

To stop the application when using Docker Compose:

```
docker-compose down
```

To also remove the volumes (this will delete the database data):

```
docker-compose down -v
```
