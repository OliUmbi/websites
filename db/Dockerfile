FROM postgres

ENV POSTGRES_DB=websites
ENV POSTGRES_USER=websites

COPY 01-structure.sql /docker-entrypoint-initdb.d/
COPY 02-data.sql /docker-entrypoint-initdb.d/
