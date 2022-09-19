import React, {useEffect, useState} from 'react';

import {getUsers} from "../../Services/axios.users";
import User from "../User/User";

const Users = ({showPost,showButton}) => {

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
        setLoading(!loading)
    }, []);

    return (
        <div>
        {
            loading ?
                (<div className='h-[570px] py-4 px-4 border-2 border-solid rounded-xl border-purple-900 my-2 mx-2 w-[100%]'>
                    {
                        users.map(user => <User key={user.id} user={user} showPost={showPost} showButton={showButton}/>)
                    }
                </div>) : <h2 className='text-center font-bold'>Loading...</h2>
        }
        </div>
    );
};

export default Users;