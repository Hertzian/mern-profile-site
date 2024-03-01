FROM postgres:14.10-alpine3.18

# Copy init custom SQL script to the container
COPY init.sql /docker-entrypoint-initdb.d/

# Change script permissions, for the user can be execute them
RUN chown postgres:postgres /docker-entrypoint-initdb.d/init.sql && \
  chmod 755 /docker-entrypoint-initdb.d/init.sql