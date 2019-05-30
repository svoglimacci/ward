FROM node:alpine

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli yarn

WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
