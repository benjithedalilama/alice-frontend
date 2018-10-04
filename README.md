# alice-frontend

For development run:
```
docker-compose up
```

To deploy to production run:
```
yarn build
hyper compose up -p frontend -f hyper-compose.yml
```

Make sure the docker image is up to date by building, tagging, and pushing the image with

```
docker build . -t benjithedalilama/alice-frontend:MVP
docker login
docker push benjithedalilama/alice-frontend:MVP
```

then pulling it with
```
hyper pull benjithedalilama/alice-frontend:MVP
```
