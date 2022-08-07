# Step 1
FROM node:14 as builder
ENV NODE_ENV=production
WORKDIR /opt

COPY public ./public
COPY src ./src
COPY package.json ./
COPY package-lock.json ./

RUN sed -i 's/react-scripts build.*/react-scripts build",/' package.json
RUN sed -i 's/axios.defaults.baseURL =.*/axios.defaults.baseURL = "";/' ./src/App.js
RUN sed -i "s/BaseURL:.*/BaseURL: '',/" ./src/utilities/Const.js


RUN npm install --production
RUN npm run build

# Stage 2
FROM nginx:1.20-alpine
WORKDIR /opt

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/docker-env.sh ./
RUN chmod +x ./docker-env.sh

COPY --from=builder /opt/build /usr/share/nginx/html

EXPOSE 80 443
#WORKDIR /usr/share/nginx/html
ENTRYPOINT [ "/opt/docker-env.sh" ]



