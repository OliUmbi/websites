FROM node:18-alpine as build

WORKDIR /project

COPY package.json package-lock.json index.html .env .env.development .env.production tsconfig.json vite.config.mjs ./
COPY ./src ./src
COPY ./public ./public

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /project/build /project

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
