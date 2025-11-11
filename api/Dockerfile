FROM maven:3.9.4-eclipse-temurin-21 as build

WORKDIR /projects

COPY ./pom.xml ./
RUN mvn dependency:resolve

COPY ./src ./src
RUN mvn clean package -DskipTests -Pproduction

FROM eclipse-temurin:23-jre as runtime

WORKDIR /projects

COPY --from=build /projects/target/api.jar ./

ENTRYPOINT ["java", "-jar", "./api.jar"]
