import React from 'react';

import {Navigate,useLocation} from "react-router-dom"
import {useSelector} from "react-redux";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const user = useSelector(state => state.users.userLogin)

    if(!user){
        return <Navigate to={'/login'} state={location}/>
    }

    return children
};

export default RequireAuth;