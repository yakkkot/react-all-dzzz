import React from 'react';

const Post = ({post}) => {
    return (
        <div className='my-4 border-2 border-solid rounded-xl border-purple-300'>
            <h3 className='font-bold text-center'>{post.userId} - {post.id}</h3>
            <p className='my-1 mx-2 text-sm'>{post.title}</p>
            <p className='my-1 mx-2 text-sm'>{post.body}</p>
        </div>
    );
};

export default Post;