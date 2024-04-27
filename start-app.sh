#!/bin/bash
echo "=====================START  APP IMAGE===============\n";
docker compose down
# This Docker cmd start service and build App image from Dockerfile
# docker compose up -d --build
# This docker cmd start docker services
docker compose up -d
# docker logs -f devops-skills-ui
docker ps
echo "=====================END ==============================="