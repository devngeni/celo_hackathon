import { useState } from "react";
import { useAuth } from "../../hooks";
import { IUser } from "../../types";
import { AuthContext } from "./authContext";

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)

  const {register, login, loadUser} = useAuth()

  return <AuthContext.Provider value={{
    isLoggedIn,
    user,
    setIsLoggedIn,
    setUser,
    register,
    login,
    loadUser
  }
  }>
    {children}
  </AuthContext.Provider>;
};
