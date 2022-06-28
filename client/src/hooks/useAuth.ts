import { config } from "../config";

export const useAuth = () => {
  const register = async (user: {
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
  }) => {
    const { username, phoneNumber: phonenumber, email, password } = user;

    try {
      const { data } = await config.axios({
        method: "post",
        url: "/users/register",
        data: {
          username,
          email,
          phonenumber,
          password,
        },
      });

      const { success, msg, token } = data;
      console.log(msg, token);

      if (success) {
      }
    } catch (_error) {}
  };

  const login = async (payload: {
    phoneNumber: string;
    password: string;
  }) => {};

  const loadUser = async (token: string) => {};

  return {
    register,
    login,
    loadUser,
  };
};
