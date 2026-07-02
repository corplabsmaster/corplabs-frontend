import React from "react";
import { Result, Button } from "antd";
import { navigate } from "gatsby";

const errs = {
  notfound: {
    status: "404",
    subTitle: "Sorry, the page you visited does not exist.",
  },
  serverUnhandled: {
    status: "500",
    subTitle: "Sorry, the server is wrong.",
  },
  unauthorize: {
    status: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
  },
};

type Props = {
  errCode: string;
};
const ErrorResult: React.FC<Props> = ({ errCode }: Props) => {
  const _errCode = errCode ? errCode : "notfound";

  return (
    <>
      <Result
        style={{ marginTop: "70px" }}
        status={errs[_errCode].status}
        title={errs[_errCode].status}
        subTitle={errs[_errCode].status}
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default ErrorResult;
