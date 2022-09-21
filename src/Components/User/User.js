import React from 'react';
import {userServices} from "../../Services";

const User = ({user,setUsers}) => {
    const {id, name, email} = user;


    const deleteUser = async () => {
        await userServices.deleteById(id);
        setUsers(prev => [...prev.filter(value => value.id !== id)]);
    };

    return (
        <div className='flex pb-2 gap-4 items-center'>
            <h2 className='w-[500px]'>{id}. {name} : {email}</h2>
            <button onClick={()=>deleteUser()} className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>
                Delete user
            </button>
        </div>
    );
};

export {User};
