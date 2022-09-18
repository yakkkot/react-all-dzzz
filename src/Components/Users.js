import React, {useEffect, useState} from 'react';

import {getUsers,getUser} from '../Services/FetchUsers'
import User from "./User";
import InformationUser from "./InformationUser";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [oneUser, setOneUser] = useState(null);
    let [loading,setLoading] = useState(false)

    let [see, setSee] = useState(true);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
        setLoading(!loading)
    }, [])


    const showInf = (id) => {
        getUser(id).then(value => setOneUser(value.data))
    }

    const sw = (idButton)=>{
        if(idButton===oneUser.id){
            setSee(!see)
        }else {
            setSee(see)
        }
    }

    return (
        <div>
            {see && (<div className={`ml-6 mb-6 ${oneUser && `information_div`}`}>
                {oneUser && <InformationUser user={oneUser}/>}
            </div>)
            }

            {loading ?
                (<div className='App border-2 py-8 px-8'>
                    {
                        users.map(user => <User person={user} key={user.id} sw={sw} showInf={showInf}/>
                        )
                    }
                </div>) :
                <h6 className='mt-4 w-full font-bold text-6xl text-center text-blue-800'>Loading...</h6>
            }

        </div>
    );
};

export default Users;