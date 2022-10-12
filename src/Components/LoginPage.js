import React, {useRef} from 'react';

import {setUser} from "../redux/slices/user.slice"
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom"

const LoginPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation()
    const dispatch = useDispatch()
    const login = useRef()

    const submit =  async (e) =>{
        e.preventDefault()
        const x = await login.current.value;
        await dispatch(setUser(x));
        (state!==null ? navigate(`${state.pathname}`) : navigate('/users'));
    }

    return (
        <div className="my-2 ">
            <form onSubmit={submit} className="px-2 py-2">
                <input  className="border-2 border-gray-900 mr-4" placeholder="Enter your name" ref={login} type="text"/>
                <button className="w-[150px] bg-blue-600 py-2 rounded-xl">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;