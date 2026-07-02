import React from "react";
import { Breadcrumb, Icon } from "antd";
import styled from "styled-components";
import { Link } from "gatsby";
import { color } from "@helpers/const";

type BreadCrumbProps = {
  data?: any;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BreadCrumb: React.FC = ({ data }: BreadCrumbProps) => {
  return (
    <BreadCrumbWrapper>
      <Breadcrumb>
        {data.map((res, index) => {
          return (
            <Breadcrumb.Item key={index}>
              {res.icon && (
                <Icon type={res.icon} style={{ marginRight: "5px" }} />
              )}
              {res.url ? (
                <Link to={res.url}>
                  <span
                    className="bbs-font-custom-title"
                    style={{
                      textTransform: "capitalize",
                      color: color.footstepBrown,
                    }}
                  >
                    {res.text}
                  </span>
                </Link>
              ) : (
                <span
                  className="bbs-font-custom-title"
                  style={{
                    textTransform: "capitalize",
                    color: color.secondary,
                  }}
                >
                  {res.text}
                </span>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </BreadCrumbWrapper>
  );
};

const BreadCrumbWrapper = styled.div`
  margin: 20px 10px;
  color: ${color.secondary};
`;
