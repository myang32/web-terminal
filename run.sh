#!/bin/bash
./build.sh
bash -c 'sleep 5 && open http://192.168.254.134:8088' &
docker run -it -p 8088:8088 web-terminal
