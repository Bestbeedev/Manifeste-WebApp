import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  
  const storedUser = () => {
    const userStored = localStorage.getItem("user");
    return userStored ? JSON.parse(userStored) : null;
  };    
  const [user, setUser] = useState(storedUser);

  const loginUser = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem('user',JSON.stringify(userInfo))
  };
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user')
    
  };
  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
