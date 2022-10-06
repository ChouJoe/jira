/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:55:26
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-06 12:56:14
 */
import { useAuth } from "context/auth_context";
import React from "react";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
export default function RegisterScreen() {
  const { register } = useAuth();
  const submitHandler = (values: { username: string; password: string }) => {
    register(values);
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
        <LongButton htmlType="submit" type="primary">
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
}
