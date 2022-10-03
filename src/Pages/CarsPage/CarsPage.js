import React, {useEffect, useState} from 'react';

import Cars from "../../Car/Cars";
import {authServices, carsServices} from "../../Services/auth.services";
import {useSearchParams} from "react-router-dom";
const CarsPage = () => {

    const [cars, setCars] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query,setQuery] = useSearchParams({page:'1'})

    useEffect(()=>{
        carsServices.getAll(query.get('page')).then(({data:res}) => {
            setCars(res.data);
            setPrev(res.prev);
            setNext(res.next);

        });
    },[query])

    const prevPage = ()=>{
        setQuery(value=>({page:value.get('page')-1}))
    }
    const nextPage = ()=>{
        setQuery(value=>({page:+value.get('page')+1}))
    }
    return (
        <div>
            <Cars cars={cars} setCars={setCars}/>
            <div className="flex gap-5 mx-2 my-2 ">

                <button disabled={!prev} onClick={prevPage} className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Prev</button>
                <button disabled={!next} onClick={nextPage} className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Next</button>

            </div>
        </div>
    );
};

export default CarsPage;