FROM node:alpine

# Dir padrao
WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js ./

RUN mkdir models
COPY models ./models

# Pacotes necessarios para a aplicacao
RUN npm install
RUN npm install -g nodemon
RUN npm install pm2 -g
RUN npm install express sequelize pg pg-hstore node-fetch@2 nodemon

# Definicao de usuario
RUN addgroup -S techstorm && adduser -S -D techstorm -G techstorm
RUN chown -R techstorm:techstorm ../app

USER techstorm

#CMD ["nodemon", "app.js"]
#pm2 start app.js --watch
#CMD ["nodemon", "app.js"]