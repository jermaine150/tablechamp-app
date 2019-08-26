# Download base image for node 9
FROM node:9.6.1

# set working directory
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN yarn install
CMD ["yarn", "host"]
