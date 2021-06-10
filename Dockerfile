# pull official base image
FROM node:alpine

MAINTAINER ladosow <ladosow@gmail.com>

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencie
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add digidex-portail
COPY . ./

RUN chown -R node /app/node_modules

USER node

# for react-router
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["npm", "start"]