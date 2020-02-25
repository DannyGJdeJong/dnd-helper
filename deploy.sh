#!/bin/bash

git pull
npm run build
rm -rf /var/www/html/*
mv build/* /var/www/html/