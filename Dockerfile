FROM busybox:stable-musl AS builder

RUN mkdir /user_config && \
    echo "root:x:0:0:root:/root:/bin/sh" > /user_config/passwd && \
    echo "applicationuser:x:1000:1000:Linux User,,,:/home/applicationuser:/bin/sh" >> /user_config/passwd && \
    echo "applicationgroup:x:1000:applicationuser" > /user_config/group

COPY . /application

FROM scratch

COPY --from=builder /user_config/passwd /etc/passwd

COPY --from=builder /user_config/group /etc/group

COPY --from=builder --chown=0:1000 --chmod=550 /bin/busybox /bin/busybox

COPY --from=builder --chown=0:1000 --chmod=550 /application /application

USER applicationuser:applicationgroup

WORKDIR /application

EXPOSE 80

ENTRYPOINT ["/bin/busybox", "httpd", "-f", "-v", "-p", "80", "-h", "/application"]