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

## Steps to Run the App:

# 1 Github

### Pull the github repo
### Install and Setup docker-compose in your system 
### Run ``` docker compose up --build```

# 2 Dockerhub

### Start mongodb cintainer
Start the mongo container first ``` docker run -d --name mongodb -p 27017:27017 mongo:latest ```

### Run image

Run the image making sure linking with mongodb 
```bash
docker run -d -p 3000:3000 \
  --link mongodb:mongo \
  -e MONGO_URI="mongodb://mongo:27017/userdb" \
  rohit273/learn-ed-app:latest
```

