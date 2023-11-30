## Build stage
#FROM alpine:latest as build
#RUN apk add openjdk17-jdk maven
#WORKDIR /app
#COPY . .
#RUN mvn clean install -DskipTests
#
## Run stage
#FROM alpine:latest as run
#RUN apk add openjdk17-jre
#WORKDIR /app
#COPY --from=build /app/target/*.jar ./server-0.0.1-SNAPSHOT.jar
#
#EXPOSE 8080
#CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]

## Use an OpenJDK runtime as the base image
#FROM openjdk:17
#
## Set the working directory in the container
#WORKDIR /app
#
## Copy the packaged JAR file into the container at /app
#COPY target/your-spring-boot-app.jar /app/server-0.0.1-SNAPSHOT.jar
#
## Expose the port the app runs on
#EXPOSE 8080
#
## Specify the command to run on container start
#CMD ["java", "-jar", "/app/server-0.0.1-SNAPSHOT.jar"]
FROM openjdk:17
EXPOSE 8080
ADD target/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/server-0.0.1-SNAPSHOT.jar"]
