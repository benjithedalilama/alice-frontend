IMAGE="benjithedalilama/alice-frontend:MVP"

hyper pull $IMAGE

yarn build
# hyper compose down -p frontend
# hyper compose up -p frontend -f hyper-compose.yml
