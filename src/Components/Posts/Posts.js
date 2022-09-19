import React from 'react';

import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div className={`px-3 w-[45%] h-[570px] overflow-scroll my-2 mx-2 ${posts.length && `border-2 border-solid rounded-xl border-purple-700`}`}>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};
export default Posts;