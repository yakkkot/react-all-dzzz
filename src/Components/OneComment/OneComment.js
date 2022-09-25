import React from 'react';

import {Link} from "react-router-dom";

const OneComment = ({comment}) => {
    return (
        <div className="border-b-2 border-b-blue-800 flex items-start justify-start text-left">
            <div>
                <Link to={'post' + comment.id}> {comment.id}. {comment.body}</Link>
            </div>
        </div>
    );
};

export default OneComment;