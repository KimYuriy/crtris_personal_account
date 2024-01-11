# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR .


################################################################################
# Create a stage for installing development dependecies.
FROM base as deps

COPY package.json .
COPY package-lock.json .
COPY jsconfig.json .

RUN npm install

FROM deps as build

COPY . .

EXPOSE 8081:8081

# Run the application.
CMD yarn serve --port 8081
