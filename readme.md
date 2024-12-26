## LearnEd (E-learning Website)
An educational website for students and programmers 😊😊😊  

![](pcView.png)

# Learn-ED App - Dockerized

**Learn-ED** is an interactive e-learning platform designed to provide engaging learning experiences with a modern, responsive user interface and robust backend services. This repository demonstrates how to containerize the Learn-ED app using Docker for easy deployment and scalability.

## Tech Stack:
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **Deployment**: Docker (Docker Compose for multi-container setup)

## Dockerized Setup

The application is containerized using **Docker** to simplify the deployment process. Docker images for both the frontend and backend are created, and **Docker Compose** is used to handle multi-container orchestration (frontend, backend, and MongoDB).

### Features of Dockerized App:
- **Frontend** and **Backend** applications are isolated in separate Docker containers.
- The **MongoDB** database runs in its own container, ensuring that data is persistent and isolated.
- **Docker Compose** simplifies the setup and orchestration of all services.

## Steps to Pull the Image from Docker Hub

1. **Ensure Docker is installed**:  
   If Docker isn't installed on your system, follow the instructions on [Docker's official website](https://docs.docker.com/get-docker/) to install it.

2. **Log in to Docker Hub**:  
   Before pulling the image, log in to your Docker Hub account by running:
   ``` docker login ```

3. **Pull the image** 
  Pull the learn-ed-app image from Docker Hub using the following command:
  ``` docker pull rohit273/learn-ed-app:latest ```

## Run the App:
To start the application with the frontend, backend, and MongoDB containers running, execute the following command:
```
docker run -p 3000:3000 -p 5000:5000 rohit273/learn-ed-app:latest
```

