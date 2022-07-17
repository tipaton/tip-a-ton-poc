import { createContext, useState } from 'react';

type User = {
    account: string,
    username: string
}
interface AuthProps {
    isLoggedIn: boolean,
    setIsLoggedIn: Function,
    user: User,
    setUser: Function
}

export const AuthContext = createContext<AuthProps>({
  user: {
    account: '',
    username: '',
  },
  setUser: () => null,
  isLoggedIn: false,
  setIsLoggedIn: () => false,
});

export function AuthContextProvider({ children }: { children: any}) {
  const [user, setUser] = useState({ account: 'EQx...9s', username: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{
      user, setUser, isLoggedIn, setIsLoggedIn,
    }}
    >
      { children }
    </AuthContext.Provider>
  );
}
