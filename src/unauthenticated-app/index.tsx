/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:55:09
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-06 12:55:30
 */
import React, { useState } from "react";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import { Card, Divider, Button } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
export const UnAuthenticatedApp = () => {
  const [register, setRegister] = useState(false);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{register ? "请登录" : "请注册"}</Title>
        {register ? (
          <LoginScreen></LoginScreen>
        ) : (
          <RegisterScreen></RegisterScreen>
        )}
        <Divider></Divider>
        <a onClick={() => setRegister(!register)}>
          {!register ? "已有账号，直接登录" : "注册账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40em) / 2) - 3.2rem),
    calc(((100vw - 40em) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
export const LongButton = styled(Button)`
  width: 100%;
`;
