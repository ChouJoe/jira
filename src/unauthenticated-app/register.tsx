/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:55:26
 * @LastEditors: Joe
 * @LastEditTime: 2022-11-06 21:02:00
 */
import { useAuth } from "context/auth_context";
import React from "react";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";
export default function RegisterScreen({
  onError,
}: {
  onError: (error: Error) => void;
}) {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwError: true });
  const submitHandler = (values: { username: string; password: string }) => {
    run(register(values)).catch((e) => {
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
        <Input placeholder="密码" id={"password"} type={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}
