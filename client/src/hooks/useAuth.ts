import { config } from "../config";
import { useEffect, useState, useContext } from "react";
import { setAuthToken } from "../helpers";
import { AuthContext } from "../context";
import { toast } from "react-toastify";

export const useAuth = () => {
  localStorage.getItem("token") && setAuthToken(localStorage.getItem("token")!);

  const { setIsLoading, setUser } = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    token && loadUser(token);

    setIsLoading(false);
  });

  const register = async (user: {
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
  }) => {
    setIsLoading(true);

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

      const { success, token, msg } = data;
      console.log("token", token);

      if (success && token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
        await loadUser(token);
      } else {
        toast.error(msg);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  const login = async (payload: { phoneNumber: string; password: string }) => {
    setIsLoading(true);

    const { phoneNumber: phonenumber, password } = payload;

    try {
      const { data } = await config.axios({
        method: "post",
        url: "/auth/login",
        data: {
          phonenumber,
          password,
        },
      });

      const { success, token, msg } = data;
      console.log("token", token);

      if (success && token) {
        localStorage.setItem("token", token);
        setAuthToken(token);
        await loadUser(token);
      } else {
        toast.error(msg);
      }
      console.log("up here", token);
    } catch (error: any) {
      toast.error(error);
    }
  };
  

  const loadUser = async (token: string) => {
    try {
      const { data } = await config.axios.get("/auth/login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("in here", token);

      const { success, msg, user } = JSON.parse(data);

      if (success && user) {
        console.log({ message: "user login success", success, user });

        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
        console.log("check this out", user);
      } else {
        toast.error(msg);
      }
    } catch (error: any) {
      localStorage.removeItem("token");
      toast.error(error);
    }
  };
  console.log("down here");

  const logout = async () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // setUser()
  };

  return {
    isLoggedIn,
    register,
    login,
    logout,
    loadUser,
  };
};
