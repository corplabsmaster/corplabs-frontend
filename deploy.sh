#!/bin/bash
ssh dayrlism@206.189.150.29 <<EOF
 sudo su -
 cd /Code/im90s-frontend
 git pull
 exit
EOF
