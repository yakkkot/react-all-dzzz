import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authServices} from "../../Services/auth.services";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const [error,setError] = useState(null)
    const navigate = useNavigate();
    const {register,reset,handleSubmit} = useForm()
    const submit = async (user)=>{
        try {
            await authServices.register(user);
            console.log(user)
            navigate('/login');
            reset()
        }
        catch (e){
            setError(e.response.data?.username);
        }
    }

    return (
        <div className="my-3 mx-3">
            {error && <h1>{error}</h1>}
            <form onSubmit={handleSubmit(submit)} className="flex items-center gap-4">
                <input type="text" placeholder="Enter name" {...register('username')}
                       className="py-2 px-2 bg-cyan-800 border-2 rounded-xl text-white"/>
                <input type="text" placeholder="Enter password" {...register('password')}
                       className="py-2 px-2 bg-cyan-800 border-2 rounded-xl text-white"/>
                <button className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Register</button>
            </form>
        </div>
    );

};

export default RegisterPage;