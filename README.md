yarn workspace server add express

yarn workspace server add nodemon -D


# Run server
$ yarn workspace server start

# Clear docker compose cache
docker-compose build --no-cache

# Run docker compose
docker compose up
