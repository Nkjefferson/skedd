# syntax=docker/dockerfile:1
FROM node:15-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm install --production

COPY . /app/


