import { AUTH } from "./types";

export function authAction(auth) {
  console.log(auth);
  return {
    type: AUTH,
    auth
  };
}
