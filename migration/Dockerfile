FROM flyway/flyway:10-alpine

WORKDIR /projects

COPY ./*.sql ./

ENV FLYWAY_URL=jdbc:postgresql://database:5432/websites
ENV FLYWAY_USER=websites
ENV FLYWAY_TABLE=migration
ENV FLYWAY_BASELINE_ON_MIGRATE=true
ENV FLYWAY_LOCATIONS=filesystem:/projects
ENV FLYWAY_SQL_MIGRATION_SEPARATOR=-

ENTRYPOINT ["flyway", "migrate"]
