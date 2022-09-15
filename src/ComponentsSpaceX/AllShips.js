import React, {useEffect, useState} from 'react';
import {getSpace} from "../Services/FetchSpacex";
import Ship from "./Ship";

const AllShips = () => {

    let [ships, setShips] = useState([]);
    let [loading,setLoading] = useState(false)
    console.log(ships);
    useEffect(()=>{
        getSpace().then(value => {
            setShips(value.data.filter(value => value.launch_year >= 2020))
            setLoading(!loading)


        });
    },[])

    console.log(ships);

    return (
        <div> {loading ?
            (<div
                className='mx-4 my-4 py-4 flex flex-wrap items-center justify-evenly gap-y-6 mt-[50px] border-solid border-2 border-sky-500 rounded-xl'>
                <h6 className='mt-4 w-full font-bold text-6xl text-center text-blue-800'>Ships</h6>
                {
                    ships.map(ship => <Ship ship={ship}/>)
                }
            </div>) :
            <h6 className='mt-4 w-full font-bold text-6xl text-center text-blue-800'>Waiting!!!</h6>
        }
        </div>
    );
};

export default AllShips;