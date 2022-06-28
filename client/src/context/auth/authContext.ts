import { createContext } from "react";
import { IUser } from "../../types";

interface IAuthContext {
  isLoggedIn: boolean;
  user: IUser | null;

  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: IUser) => void;

  register: (user: {
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
  }) => Promise<void>;

  login: (payload: { phoneNumber: string; password: string }) => Promise<void>;
  loadUser: (token: string) => Promise<void>;
}
const defaultValue = {
  isLoggedIn: false,
  user: null,

  setIsLoggedIn: (value: boolean) => {},
  setUser: (user: IUser) => {},

  register: async (user: {
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
  }) => {},
  login: async (payload: { phoneNumber: string; password: string }) => {},
  loadUser: async (token:any) => {},
};

export const AuthContext = createContext<IAuthContext>(defaultValue);
