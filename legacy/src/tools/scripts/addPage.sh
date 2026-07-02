#!/bin/bash
read -p "

Please Enter Page Name (**sneak-case): " name

PascalCase=$(awk 'BEGIN{FS="";RS="-";ORS=""} {$0=toupper(substr($0,1,1)) substr($0,2)} 1' <<< $name)


mkdir ./src/components/views/$name &&
touch ./src/components/views/$name/index.tsx &&
echo "
import React from 'react'
import { Link } from 'gatsby'
import { PageHeader, Row, Col } from 'antd';

import styled from 'styled-components';
import SEO from '@components/common/seo';

import withLocation from '@helpers/hoc/withLocation';


type ${PascalCase}Props = {
  search?: {
    search: string;
  };
  location: object;
};

const ${PascalCase} = ({ search: { search } }: ${PascalCase}Props) => {
  console.log(search);
  
  return (
    <${PascalCase}Wrapper>
      <SEO title='${PascalCase}' />
      <PageHeader title='${PascalCase}' subTitle='..' />
        <p
          style={{
            color: 'cornflowerblue',
            fontSize: 50,
            fontWeight: 'bold',
          }}
        >
          Halo! This is <b>${PascalCase}</b> page...
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}></Col>
            <Col xs={24} sm={12} lg={8}></Col>
            <Col xs={24} sm={12} lg={8}></Col>
          </Row>
        </p>
    </${PascalCase}Wrapper>
  )
}

const ${PascalCase}Wrapper = styled.div'`
  && {
    margin: 0 auto;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
  }
`';

export default withLocation(${PascalCase})
" >> ./src/components/views/$name/index.tsx &&


echo "
#######################################
###Created Page! - $PascalCase #####
#######################################
"
echo "./src/pages/$name"
