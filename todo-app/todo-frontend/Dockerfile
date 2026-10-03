FROM node:24-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm test

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]