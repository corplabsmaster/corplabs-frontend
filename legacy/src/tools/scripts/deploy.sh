#!/bin/bash
ssh jb-live-server <<EOF
 sudo su -
 cd /Code/jb-frontend
 git add --all
 git reset --hard
 git pull
 yarn
 yarn build:prod
 exit
EOF
