FROM openjdk:21

# todo implement build step
WORKDIR /project

COPY ./target/api.jar ./api.jar

ENTRYPOINT ["java","-jar","./api.jar"]
