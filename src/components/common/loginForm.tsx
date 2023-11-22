import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import styled from "styled-components";

import { authSelection } from "@helpers/const";

type Props = {
  submitLogin?: (values: object) => void;
  loading: boolean;
  isSelection?: string;
};

const LoginForm: React.FC<Props> = ({
  submitLogin,
  loading,
  isSelection,
}: Props) => {
  const onFinish = (values: object) => {
    submitLogin(values);
  };

  return (
    <LoginWrapper>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="login-form"
      >
        <Form.Item
          hasFeedback
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          hasFeedback
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {!(isSelection === authSelection.login) && (
          <Form.Item
            hasFeedback
            name="c_password"
            rules={[
              {
                required: true,
                message: "Please input your Again Your Password!",
              },
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        )}
        {isSelection === authSelection.login && (
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="login-remember-me">Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <a style={{ float: "right" }} href="">
                Forgot password
              </a>
            </Col>
          </Row>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
};

export default LoginForm;

const LoginWrapper = styled.div`
  .login-form {
    max-width: auto;
  }
  .login-form-forgot {
    float: right;
  }
  .login-remember-me,
  .login-register-now {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;
