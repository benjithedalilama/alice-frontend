IMAGE="benjithedalilama/alice-frontend:MVP"

docker build . -t $IMAGE
docker login
docker push $IMAGE
