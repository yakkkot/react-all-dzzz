import React, {useEffect, useState} from 'react';
import {getUsers,getUser} from '../Services/FetchUsers'
import User from "./User";
import InformationUser from "./InformationUser";


const Users = () => {

    let [users, setUsers] = useState([]);
    let [oneUser, setOneUser] = useState(null);


    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const showInf = (id) => {
        getUser(id).then(value => setOneUser(value.data))
    }
    return (
        <div>
            <div className={`ml-6 mb-6 ${oneUser && `information_div`}`}>
                {oneUser && <InformationUser user={oneUser}/>}
            </div>
        <div className='App border-2 py-8 px-8'>
            {
                users.map(user => <User person={user} key={user.id} showInf={showInf}/>
                )
            }
        </div>
        </div>
    );
};

export default Users;