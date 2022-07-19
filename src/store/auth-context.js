import React,{useState} from "react";

// Creamos la estructura del contexto
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {} ,
  logout: ()=> {}
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token')
console.log(`Retrieving token from local storage: ${storedToken}`)
  return storedToken
}


// Nuestra funcion principal que regresa el contexto
export const AuthContextProvider = (props) => {

  const tokenData = retrieveStoredToken();

const [token,setToken] = useState(tokenData)

const loginHandler = () =>{
  console.log("entrando a login Handler")
  setToken("1234")
  localStorage.setItem('token',"1234")
  
}

const logoutHandler  = () =>{
    setToken(null)
    localStorage.removeItem('token')
}


const userIsLoggedIn = !!token
console.log(token)

console.log(userIsLoggedIn)
console.log(token)

// Inicializamos los valores
const contextValue = {
  isLoggedIn: userIsLoggedIn,
  login: loginHandler,
  logout: logoutHandler
};

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
