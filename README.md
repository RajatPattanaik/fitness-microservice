# 🏋️‍♂️ Fitness Microservice Platform

A distributed **Java Spring Boot** microservices-based fitness tracking system designed to manage users, track activities, and provide AI-powered workout recommendations.  
This project implements modern backend patterns — **Microservices Architecture**, **Service Discovery**, **Centralized Configuration**, **API Gateway**, and **Event-Driven Communication**.

---

## 📌 Features

- **User Authentication & Authorization**
    - Integrated with **Keycloak** using **OAuth2**.
    - Stores user data securely in **PostgreSQL**.

- **Activity Tracking**
    - Saves user activity logs in **MongoDB**.
    - Publishes activity events to **RabbitMQ** for async processing.

- **AI Recommendations**
    - Consumes events from RabbitMQ.
    - Generates AI-powered fitness suggestions.
    - Stores recommendations in **MongoDB**.

- **Centralized API Gateway**
    - Built with **Spring WebFlux** for non-blocking request handling.
    - Serves as the single entry point for all APIs.

- **Service Discovery**
    - **Eureka Server** for registering and locating services dynamically.

- **Centralized Configuration**
    - **Spring Cloud Config Server** to store and manage configs for all services.

---

## ⚙ Tech Stack

- **Backend:** Java 21, Spring Boot, Spring Cloud
- **Security:** Keycloak, OAuth2
- **Databases:** PostgreSQL, MongoDB
- **Messaging:** RabbitMQ
- **Service Discovery:** Eureka Server
- **Configuration:** Spring Cloud Config Server
- **Gateway:** Spring Cloud Gateway (WebFlux)
- **Containerization:** Docker & Docker Compose

---

## 🚀 Getting Started

### Prerequisites
- Java 21
- Maven 3.8+
- Docker & Docker Compose

### Steps to Run

1. **Clone the repository**
```bash
git clone https://github.com/rajatpattanaik/fitness-microservice.git
```

2. **Start Application**

```bash
docker-compose up -d 
```
