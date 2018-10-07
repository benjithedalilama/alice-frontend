IMAGE="benjithedalilama/alice-frontend:MVP"

./hyper pull $IMAGE
./hyper compose down -p frontend
./hyper compose up -p frontend -f hyper-compose.yml
