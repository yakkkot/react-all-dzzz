import React from 'react';

import {useDispatch} from "react-redux";
import {infoCurrentUser,deleteUser} from "../redux/slices/user.slice";

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name, email} = user
    return (
        <div className="flex items-center justify-between py-2 px-2 my-1 mx-2 border-2 border-gray-900 rounded-xl w-full">
            <div className="flex items-center gap-2">
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>email: {email}</p>
            </div>
            <div>
            <button onClick={()=> dispatch(infoCurrentUser(id))} className="w-[100px] bg-blue-600 py-2 rounded-xl mr-4">All info</button>
            <button onClick={()=> dispatch(deleteUser({id}))} className="bg-red-600 rounded-xl py-2 px-3">X</button>
            </div>
        </div>
    );
};

export default User;