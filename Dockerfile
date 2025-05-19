FROM node:23-alpine
WORKDIR /app
COPY . /app
ENV DATABASE_URL=postgresql://postgres:tmmoney@db:5432/trackmymoney
RUN npm install
EXPOSE 3000
CMD ["sh", "-c", "npx prisma db push && npm run dev"]
