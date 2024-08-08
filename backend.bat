set VERSION=01

cd api
call mvn clean package -Pproduction
call docker build . -t websites-api:%VERSION%
