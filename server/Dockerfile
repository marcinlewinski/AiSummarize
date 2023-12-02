# Use an OpenJDK runtime as the base image
FROM openjdk:20

# Set the working directory in the container
WORKDIR /app

# Copy the packaged JAR file into the container at /app
COPY target/server-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the app runs on
EXPOSE 8080

