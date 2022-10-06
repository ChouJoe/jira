import styled from "@emotion/styled";
import { Row } from "components/lib";
import { useAuth } from "context/auth_context";
import ProjectList from "screens/project-list";

/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:54:59
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-06 21:42:03
 */
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Container>
        <Header between={true}>
          <HeaderLeft gap={true}>
            <h2>blank1</h2>
            <h2>blank2</h2>
          </HeaderLeft>
          <HeaderRight>
            <button onClick={() => logout()}>登出</button>
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
const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
