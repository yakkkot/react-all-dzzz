import React from 'react';

const OneAlbum = ({value}) => {
    return (
        <div className="w-[40%]">
            <div>{value.id}. {value.title}</div>
        </div>
    );
};

export default OneAlbum;