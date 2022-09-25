import React, {useEffect, useState} from 'react';
import {postsServices} from "../../Services";
import {useParams} from "react-router-dom";

const Posts = () => {
    const {id} = useParams();
    console.log(id)
        const [posts,usePosts] = useState(null)

    useEffect(()=>{
        postsServices.getOne(id).then(value => usePosts(value.data));
    },[id])
    return (

        <div>

            <div>
                {posts && JSON.stringify(posts)}
            </div>
        </div>
    );
};

export default Posts;