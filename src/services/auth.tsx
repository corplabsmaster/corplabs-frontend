import Cookies from "js-cookie";

import packageJson from "../../package.json";

export const isBrowser: any = () => typeof window !== "undefined";

const cookieToken = `${packageJson}_token`;
const cookieUser = `${packageJson}_user`;

export const getToken: any = () =>
  isBrowser() && Cookies.get(cookieToken)
    ? JSON.parse(Cookies.get(cookieToken))
    : {};
export const getUser: any = () =>
  isBrowser() && Cookies.get(cookieUser)
    ? JSON.parse(Cookies.get(cookieUser))
    : {};

const setToken = (token: any) =>
  Cookies.set(cookieToken, JSON.stringify(token));
const setUser = (user: any) => Cookies.set(cookieUser, JSON.stringify(user));

export const handleLogin: any = (res: any) => {
  const {
    jwt,
    user: { id, username },
  } = res.login ? res.login : res.register ? res.register : res.ssoLogin;

  if (jwt) {
    return setUser({
      username,
      id,
      token: jwt,
    });
  }

  return false;
};

export const isLoggedIn: any = () => {
  const user = getUser();

  return !!user.username;
};

export const logout: any = (callback: any) => {
  setUser({});
  setToken({});
  callback();
};
