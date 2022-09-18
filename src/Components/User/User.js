import React from 'react';

import PostButton from "../PostButton/PostButton";

const User = ({user,showPost,showButton}) => {
    return (
        <div className='flex items-center justify-between my-2 w-[100%] px-6'>
            <h2 className='font-bold'>{user.id} - {user.name} - {user.email}</h2>
            <PostButton showPost={showPost} user={user} showButton={showButton}/>
        </div>
    );
};

export default User;