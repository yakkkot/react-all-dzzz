import React, {useEffect, useState} from 'react';
import {commentServices} from "../../Services";
import {Comment} from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = () => {

    const [comments,setComments] = useState([])

    useEffect(()=>{
        commentServices.getAll().then(({data}) => setComments(data.filter(value => value.id > 495)));
    },[])
    return (
        <div className='my-4 mx-4 py-4 px-4 border-2 border-blue-800 rounded-xl font-bold'>
            <CommentForm setComments={setComments}/>
            <hr className='my-4'/>
            <div>
                {
                    comments.map(comment=> <Comment key={comment.id} comment={comment}/> )
                }
            </div>
        </div>
    );
};

export {Comments}