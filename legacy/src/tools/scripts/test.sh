#!/bin/bash
read -p "What is your first name? " firstname
read -p "What is your first names? " firstnames
echo "Hello, ${firstname}." ${firstnames}


#==========================================================================
#==========================================================================SAMPLE
#==========================================================================
# read -p "What is your first name? " firstname
# firstname=$(tr '[A-Z]' '[a-z]' <<< $firstname) #lower
# firstname=$(tr '[:lower:]' '[:upper:]' <<< $firstname) #upper
# echo "Hello, ${firstname}."
