import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import {usersServices} from "../../Services";

const AllInfoV2 = () => {
    const {id} = useParams()
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        usersServices.getOne(id).then(({data}) => setInfo(data));
    },[id])
    return (
        <div className="border-2 border-blue-800 text-left my-2 mx-2 py-2 px-2">
            {info &&
                <div>{JSON.stringify(info)}</div>
            }
        </div>
    );
};

export default AllInfoV2;