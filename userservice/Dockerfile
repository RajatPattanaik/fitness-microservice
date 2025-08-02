# Use Java 21 base image
FROM eclipse-temurin:21-jdk-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the built Spring Boot jar (assuming it's in target/)
COPY target/*.jar app.jar

# Railway assigns port through $PORT env var, default to 8081
EXPOSE 8081

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
