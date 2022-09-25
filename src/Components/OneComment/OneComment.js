import React from 'react';

import {Link} from "react-router-dom";

const OneComment = ({comment}) => {
    return (
        <div className="flex items-center">
            <div>
                <Link to={'post' + comment.id}> {comment.id}. {comment.body}</Link>
            </div>
            {/*<button className="py-4 px-8 bg-yellow-500">ewewew</button>*/}
            {/*<hr/>*/}
        </div>
    );
};

export default OneComment;