#!/usr/bin/env bash

source /opt/codedeploy-agent/deployment-root/${DEPLOYMENT_GROUP_ID}/${DEPLOYMENT_ID}/deployment-archive/scripts/env.conf
if [ ! -d "/var/www/html/${NAME}" ]
then
    mkdir /var/www/html/${NAME}
    chown -R ${GLOBAL_OWNER}:${GLOBAL_GROUP} /var/www/html/${NAME}
    chmod -R 775 /var/www/html/${NAME}
else
    echo 1;
fi