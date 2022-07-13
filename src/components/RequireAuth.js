
import React,{useContext} from 'react'
import {useLocation,Navigate,Outlet} from "react-router-dom"
import AuthContext from '../store/auth-context'

const RequireAuth = () =>  {

    const authCtx = useContext(AuthContext);
    const location = useLocation()

    return(
        authCtx.isLoggedIn
        ? <Outlet />
        : <Navigate to="/Login" state={{from:location}} replace />
    )

}

export default RequireAuth