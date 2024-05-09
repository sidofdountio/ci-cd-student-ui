#!/bin/bash
echo "=====================START  APP IMAGE===============\n";
# docker compose down
# This Docker cmd start service and build App image from Dockerfile
docker compose up -d --build
# This docker cmd start docker services
# docker compose up -d
# docker logs -f devops-skills-ui
docker tag devops-skills-ui:v1.0.0 dountio/devops-skills-ui:v1.0.0
echo "Image target"
docker push dountio/devops-skills-ui:v1.0.0
echo "=====================END ==============================="