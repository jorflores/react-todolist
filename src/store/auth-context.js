import React from 'react'


const AuthContext = React.createContext({
   isLoggedIn: false
  });

const contextValue = {
    isLoggedIn: false
  };

  export const AuthContextProvider = (props) => {


    return(
        <AuthContext.Provider value = {contextValue}>
        {props.children}
        </AuthContext.Provider>
    )
    

  }



export default AuthContext