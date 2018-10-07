IMAGE="benjithedalilama/alice-frontend:MVP"

yarn build

docker build . -t $IMAGE
docker login
docker push $IMAGE
