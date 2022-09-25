import React from 'react';

import {useEffect, useState} from "react";
import {albumsServices,} from "../../Services";
import OneAlbum from "./OneAlbum";
const Albums = () => {
    const [albums,setAlbums] = useState([])

    useEffect(()=>{
        albumsServices.getAll().then(({data}) => setAlbums(data));
    },[])
    return (
        <div className="border-2 mx-2 my-2 px-2 border-green-800">
            <div className="flex flex-wrap items-center justify-between my-2">
                {
                    albums.map(value => <OneAlbum value={value} key={value.id}/> )
                }
            </div>
        </div>
    );
};

export default Albums;