import React from 'react';

import {useLocation} from "react-router-dom";

const AllUserInformation = () => {

   const {state} = useLocation()
    return (
        <div className="border-2 border-blue-800 text-left my-2 mx-2 py-2 px-2">
            {JSON.stringify(state)}
        </div>
    );
};

export default AllUserInformation;