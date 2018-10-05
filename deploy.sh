IMAGE="benjithedalilama/alice-frontend:MVP"

docker build . -t $IMAGE
docker login
docker push $IMAGE

hyper pull $IMAGE

yarn build
hyper compose down -p frontend
hyper compose up -p frontend -f hyper-compose.yml
