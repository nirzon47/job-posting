# Use the official Bun base image
FROM oven/bun:1

# Set the working directory inside the container
WORKDIR /app

# Copy the application code and related files
COPY . .

# Install Bun dependencies (if any)
RUN bun install

# Expose the port your Bun application listens on (usually 3000)
EXPOSE 3000

# Start the Bun application using the default command
CMD ["bun", "run", "start"]
