import React from 'react';

const Ship = ({ship}) => {
    return (
        <div className='w-[21%] flex flex-col items-center gap-6 py-4 px-4 ship_small_container'>
            <h6 className='font-bold'>{ship.mission_name} - {ship.launch_year}</h6>
            <img src={ship.links.mission_patch_small} alt=""/>
        </div>
    );
};

export default Ship;