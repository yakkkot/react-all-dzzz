import React, {useEffect, useState} from 'react';

import {usersServices} from "../../Services";
import OneUser from "./OneUser";
const Users = () => {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        usersServices.getAll().then(({data}) => setUsers(data));
    },[])
    return (
        <div>
            {
                users.map(user=> <OneUser key={user.id} user={user}/> )
            }
        </div>
    );
};

export default Users;