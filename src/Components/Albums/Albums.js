import React from 'react';
import {useEffect, useState} from "react";
import {albumsServices,} from "../../Services";

const Albums = () => {
    const [albums,setAlbums] = useState([])

    useEffect(()=>{
        albumsServices.getAll().then(({data}) => setAlbums(data));
    },[])
    return (
        <div>
            <div>
                {
                    albums.map(value => <div>{value.id}. {value.title}</div>)
                }
            </div>
        </div>
    );
};

export default Albums;