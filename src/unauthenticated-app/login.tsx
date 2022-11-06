/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-25 14:25:42
 * @LastEditors: Joe
 * @LastEditTime: 2022-11-06 20:59:21
 */
import { useAuth } from "context/auth_context";
import React from "react";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";
export default function LoginScreen({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwError: true });
  const submitHandler = ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("两次输入密码不一致"));
      return;
    }
    run(login(values)).catch((e) => {
      onError(e);
    });
  };
  return (
    <Form onFinish={submitHandler}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" id={"username"} type="text" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" id="password" type="password" />
      </Form.Item>
      <Form.Item
        name={"cpassword"}
        rules={[{ required: true, message: "请再次输入密码" }]}
      >
        <Input placeholder="密码" id="cpassword" type="password" />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType="submit" type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
}
