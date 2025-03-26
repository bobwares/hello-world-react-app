# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency manifests and install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install

# Copy the entire project and build the production bundle
COPY . .
RUN npm run build

# Stage 2: Serve the production build
FROM node:18-alpine
WORKDIR /app

# Copy the production build from the builder stage.
# Note: We copy from /app/dist since webpack outputs there.
COPY --from=builder /app/dist ./build

# Install a lightweight static file server globally
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5002

# Serve the build folder on port 5000
CMD ["serve", "-s", "build", "-l", "5002"]
