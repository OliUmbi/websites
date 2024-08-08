FROM openjdk:21

WORKDIR /project

COPY ./target/api.jar ./api.jar

ENTRYPOINT ["java","-jar","./api.jar"]
