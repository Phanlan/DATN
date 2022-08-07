#!/bin/sh
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,); 
cat /etc/nginx/conf.d/default.conf | envsubst $EXISTING_VARS | tee /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'