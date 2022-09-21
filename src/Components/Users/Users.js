import React, {useEffect, useState} from 'react';
import {UserForm} from "../UserForm/UserForm";
import {User} from "../User/User";
import {userServices} from "../../Services";

const Users = () => {

    const [users,setUsers] = useState([])

    useEffect(() => {
        userServices.getAll().then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <div className='mx-2 my-2 py-2 px-2 border-2 border-purple-500 rounded-xl'>
            {
                users.map(user=> <User key={user.id} user={user} setUsers={setUsers}/> )
            }
            </div>
        </div>
    );
};

export {Users};