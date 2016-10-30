#!/bin/bash
IMAGE=stefanscherer/web-terminal
docker build -t ${IMAGE}:latest .

# Push
if [ "$1" == "--push" ]; then
  echo "Pushing ${IMAGE}..."
  docker push ${IMAGE}:latest
fi
