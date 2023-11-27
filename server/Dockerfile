# Etap budowy
FROM alpine:latest as build

RUN apk add openjdk17-jdk maven
WORKDIR /app
COPY . .
RUN mvn clean install

# Etap uruchomieniowy
FROM alpine:latest as run

RUN apk add openjdk17-jre
WORKDIR /app
COPY --from=build /app/target/*.jar ./run.jar

EXPOSE 8080
CMD ["java", "-jar", "./run.jar"]
