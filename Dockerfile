FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --immutable --immutable-cache --check-cache
COPY . ./
RUN yarn build
ENTRYPOINT yarn start