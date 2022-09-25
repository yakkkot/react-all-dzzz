import React from 'react';

import {Link} from "react-router-dom";

const OneUser = ({user}) => {
    return (
        <div className="flex items-center justify-center gap-4 my-2">
            <h2 className="w-[200px] text-left">{user.id}. {user.name}</h2>
            <Link to={'/users'+user.id} state={{...user}}>
                <button className="py-2 px-6 border-2 border-gray-900">All informationV1</button>
            </Link>
            <Link to={'/users'+'/v2/'+user.id}>
                <button className="py-2 px-6 border-2 border-gray-900">All informationV2</button>
            </Link>
        </div>
    );
};

export default OneUser;