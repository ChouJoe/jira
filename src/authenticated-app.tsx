import { useAuth } from "context/auth_context";
import ProjectList from "screens/project-list";

/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:54:59
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 18:06:54
 */
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>登出</button>
      <ProjectList />
    </div>
  );
};
