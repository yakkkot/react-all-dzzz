import React from 'react';

import {useEffect, useState} from "react";
import {commentsServices} from "../../Services";
import OneComment from "../OneComment/OneComment";
import {Outlet} from "react-router-dom"

const Comments = () => {
    const [comments,setComments] = useState([])

    useEffect(()=>{
        commentsServices.getAll().then(({data}) => setComments(data));
    },[])
    return (
        <div>
            <Outlet/>
            <div className="py-3 px-3 mx-2">
                {
                    comments.map(comment => <OneComment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
};

export default Comments;