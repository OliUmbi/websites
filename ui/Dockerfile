FROM node:18-alpine as build

WORKDIR /projects

COPY package.json package-lock.json index.html .env.development .env.production tsconfig.json vite.config.mjs ./
COPY ./src ./src
COPY ./public ./public

RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /projects

COPY --from=build /projects/build ./

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
