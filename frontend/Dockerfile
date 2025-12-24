# Base
FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Development Stage
FROM base AS dev
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build Stage
FROM base AS build
ENV NODE_END=production
RUN npm run build

# Production Stage
FROM node:24-alpine AS prod
WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
# We everything gets compiled into one large file
COPY --from=build /app/dist ./dist
EXPOSE 5173
CMD ["node", "dist/index.js"]

