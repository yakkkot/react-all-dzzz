import React from 'react';

import {useForm} from "react-hook-form";
import {userServices} from "../../Services";
import {userValidator} from "../../Validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit, formState: {isValid, errors}} = useForm(
        {mode: "all",
            resolver: joiResolver(userValidator),
    });

    const newUser = async(user)=>{
        const {data} = await userServices.create(user);
        setUsers(prev => [...prev, data]);
        reset();
    }


    return (
        <form onSubmit={handleSubmit(newUser)}
            className='my-2 mx-2 flex items-center gap-4 bg-gray-400 text-purple-50 border-2 py-2 px-6 border-gray-900 rounded-xl'>
            <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                   placeholder='Name' {...register('name')}/>
            {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
            <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                   placeholder='Email' {...register('email')}/>
            {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
            <button disabled={!isValid}
                    className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Save User
            </button>
        </form>
    );
};

export {UserForm}