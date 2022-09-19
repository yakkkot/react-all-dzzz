import React from 'react';

const PostButton = ({user,showPost,showButton}) => {

    return (
        <button onClick={() => {
            showPost(user.id);
            showButton(user.id)
        }} className='bg-fuchsia-500 border-2 border-solid rounded-xl border-purple-900 px-8 py-2'>
            Show posts
        </button>
    );
};

export default PostButton;