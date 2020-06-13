# first stage builder
FROM node:alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# second phase/stage
# expose port 80 to listen for incoming traffic
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html