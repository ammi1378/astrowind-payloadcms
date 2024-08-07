import type { AccessArgs, User } from "payload";

type isAuthenticated = (args: AccessArgs<User>) => boolean;

export const authenticated: isAuthenticated = ({ req: { user } }) => {
  if (user) {
    return true;
  } else {
    return false;
  }
};
