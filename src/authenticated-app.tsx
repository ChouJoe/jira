import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useAuth } from "context/auth_context";
import ProjectList from "screens/project-list";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";

/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:54:59
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-07 12:43:53
 */
export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <Container>
        <Header between={true}>
          <HeaderLeft gap={true}>
            <SoftwareLogo
              width={"18rem"}
              color={"rgb(38,132,255)"}
            ></SoftwareLogo>
            <h2> 项目</h2>
            <h2>用户</h2>
          </HeaderLeft>
          <HeaderRight>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key={"logout"}>
                    <Button type={"link"} onClick={() => logout()}>
                      登出
                    </Button>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button type={"link"} onClick={(e) => e.preventDefault()}>
                Hi,{user?.name}
              </Button>
            </Dropdown>
          </HeaderRight>
        </Header>
        <Main>
          <ProjectList />
        </Main>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
