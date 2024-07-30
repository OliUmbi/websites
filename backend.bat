set VERSION=01

cd backend
call mvn clean package -Pproduction
call docker build . -t websites-backend:%VERSION%
