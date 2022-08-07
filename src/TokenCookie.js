import * as Cookies from "js-cookie";

export const setTokenCookie = (token) => {
  Cookies.remove("x-csrf-token");
  Cookies.set("x-csrf-token", token, { expires: 14 });
};

export const getTokenCookie = () => {
  return Cookies.get("x-csrf-token");
};
