import React from 'react';

import {useDispatch} from "react-redux";
import {onePost} from "../redux/slices/posts.slice";

const Post = ({post}) => {
    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div className="border-2 w-[45%] border-gray-700 rounded-xl py-1 px-2 flex items-center justify-between">
            <p>id: {id}. {title}</p>
            <button onClick={()=> dispatch(onePost({id}))} className="bg-green-600 rounded-xl py-2 px-3">✓</button>
        </div>
    );
};

export default Post;