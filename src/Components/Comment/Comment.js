import React from 'react';

const Comment = ({comment}) => {

    const {id,postId,name,body,email} = comment
    return (
        <div className='mb-1 py-2 px-4 border-2 border-pink-600 rounded-xl'>
            <h3>id:{id} | name:{name}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Comment}