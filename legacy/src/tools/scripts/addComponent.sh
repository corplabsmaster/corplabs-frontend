#!/bin/bash
read -p "

Please Enter Component Name (**sneak-case): " name

PascalCase=$(awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1' <<< $name)


touch ./src/components/common/$name.tsx &&
echo "
import React from 'react'
import { Link } from 'gatsby'

export const ${PascalCase} :React.FC = () => {
  return (
    <div align='center' style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Halo! This is <b>${PascalCase}</b> page...
      </p>
    </div>
  )
}

export default ${PascalCase}
" >> ./src/components/common/$name.tsx &&


echo "
#######################################
###Created Components! - $PascalCase #####
#######################################
"
echo "./src/components/common/$name"
