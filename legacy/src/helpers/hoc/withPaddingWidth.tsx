import React from "react";
import styled from "styled-components";

const withPaddingWidth =
  (ComponentToWrap: any) =>
  (props: any): any =>
    (
      <PaddingContainer>
        <ComponentToWrap {...props} />
      </PaddingContainer>
    );

export default withPaddingWidth;

const PaddingContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;
