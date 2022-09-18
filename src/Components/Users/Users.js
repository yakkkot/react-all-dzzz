import React, {useEffect, useState} from 'react';

import {getUsers} from "../../Services/axios.users";
import User from "../User/User";

const Users = ({showPost,showButton}) => {

    const [users,setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);


    return (
        <div className='py-4 px-4 border-2 border-solid rounded-xl border-purple-900 my-2 mx-2 w-[48%]'>
            {
                users.map(user => <User key={user.id} user={user} showPost={showPost} showButton={showButton}/> )
            }
        </div>
    );
};

export default Users;