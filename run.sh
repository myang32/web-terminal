#!/bin/bash
./build.sh
IMAGE=stefanscherer/web-terminal
bash -c 'sleep 5 && open http://192.168.254.134:8088' &
docker run -it -p 8088:8088 ${IMAGE}
