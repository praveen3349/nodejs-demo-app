
<img width="1119" height="109" alt="image" src="https://github.com/user-attachments/assets/a55ada2f-b641-4eaf-8791-5d6bf733724e" />

## Overview
This project demonstrates a **complete CI/CD pipeline** for a Node.js web application using **GitHub Actions** and **Docker**.  
The workflow automates the process of:

1. Running tests  
2. Building the Docker image  
3. Pushing the image to **Docker Hub**  

The application is a simple Node.js web server displaying a styled landing page.

---

## Features
- Node.js web application  
- Dockerized for easy deployment  
- Automated CI/CD pipeline using GitHub Actions  
- Pushes Docker image to Docker Hub automatically  
- Can run locally or on any cloud platform  

---

## Project Structure

nodejs-demo-app/
- index.js # Node.js server
- package.json # Dependencies and scripts
- Dockerfile # Docker instructions
- .dockerignore # Files to exclude from Docker image
- .github/workflows/
- main.yml # CI/CD workflow

---

## Installation & Local Run

1. **Clone the repo**
git clone https://github.com/YOUR_USERNAME/nodejs-demo-app.git
cd nodejs-demo-app

<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/8bfccb92-d1e5-4691-b43b-e69bf89c0884" />

2. **Install dependencies**
npm install
npm start
http://localhost:3000

3. **Docker Instructions**
**Build Docker image**
docker build -t nodejs-demo-app:latest .

**Run Docker container**
docker run -d -p 3000:3000 --name nodejs-app --restart always nodejs-demo-app:latest

**Stop / Remove container**
docker stop nodejs-app
docker rm nodejs-app

## CI/CD Pipeline (GitHub Actions)

Trigger: On push to main branch

Steps:

- Set up Node.js environment

- Install dependencies

- Run tests

- Build Docker image

- Login to Docker Hub

- Push Docker image to Docker Hub

<!-- Replace with GitHub Actions screenshot -->
<img width="1888" height="729" alt="image" src="https://github.com/user-attachments/assets/2c8782dc-3b8d-4281-af07-9f8fabf04a75" />

## GitHub Secrets

**To run the workflow securely, add the following repository secrets:**

| Name             | Description                     |
|-----------------|---------------------------------|
| DOCKER_USERNAME  | Docker Hub username             |
| DOCKER_PASSWORD  | Docker Hub password or token    |

Once the Docker image is pushed to Docker Hub:

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/66b4409c-463d-4b41-a891-40f75d495384" />


 - docker pull YOUR_USERNAME/nodejs-demo-app:latest
 - docker run -d -p 3000:3000 YOUR_USERNAME/nodejs-demo-app:latest
   ## Visit: http://localhost:3000

<img width="1920" height="1080" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/b91f4f8a-aba1-4f72-886e-8e434e00e0ec" />

---


