import React from "react";
import { Empty } from "antd";
import styled from "styled-components";

type Props = {};
export const EmptyContent: React.FC<Props> = () => {
  return (
    <EmtpyContentWrapper>
      <Empty description={false} />
    </EmtpyContentWrapper>
  );
};

const EmtpyContentWrapper = styled.div`
  margin: 50px 0;
`;
