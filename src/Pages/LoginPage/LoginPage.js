import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {authServices} from "../../Services/auth.services";

const LoginPage = () => {

    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const {register, reset, handleSubmit} = useForm()
    const submit = async (user) => {
        try {
            const {data} = await authServices.login(user);
            authServices.setTokens(data);
            navigate('/cars');
            reset()
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="my-3 mx-3">
            <form onSubmit={handleSubmit(submit)} className="flex items-center gap-4">
                <input type="text" placeholder="Enter name" {...register('username')}
                       className="py-2 px-2 bg-cyan-800 border-2 rounded-xl text-white"/>
                <input type="text" placeholder="Enter password" {...register('password')}
                       className="py-2 px-2 bg-cyan-800 border-2 rounded-xl text-white"/>
                <button className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Login</button>
            </form>
        </div>
    );

};

export default LoginPage;