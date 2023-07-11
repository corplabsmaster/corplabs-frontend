#!/bin/bash
ssh commlabs-do-shared-server <<EOF
 sudo su -
 cd /Code/corplabs-frontend
 git pull
 exit
EOF
