# Use the BusyBox image as a lightweight base for building the application
FROM busybox:stable-musl AS builder

# Create user and group configuration files
RUN mkdir /user_config && \
    echo "root:x:0:0:root:/root:/bin/sh" > /user_config/passwd && \
    echo "applicationuser:x:1000:1000:Linux User,,,:/home/applicationuser:/bin/sh" >> /user_config/passwd && \
    echo "applicationgroup:x:1000:applicationuser" > /user_config/group

# Copy application files
COPY . /application

# Final stage: Create minimal image
FROM scratch

# Copy user and group configuration
COPY --from=builder /user_config/passwd /etc/passwd
COPY --from=builder /user_config/group /etc/group

# Copy BusyBox binary and set ownership and permissions
COPY --from=builder --chown=0:1000 --chmod=550 /bin/busybox /bin/busybox

# Copy application files and set ownership and permissions
COPY --from=builder --chown=0:1000 --chmod=550 /application /application

# Set user to non-root user named "applicationuser"
USER applicationuser:applicationgroup

# Set working directory to /application
WORKDIR /application

# Expose port 80 for the HTTP server
EXPOSE 80

# Set the entrypoint to run the BusyBox HTTP server
ENTRYPOINT ["/bin/busybox", "httpd", "-f", "-v", "-p", "80", "-h", "/application"]