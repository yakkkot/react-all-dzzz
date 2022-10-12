import React, {useEffect} from 'react';

import {useDispatch,useSelector} from "react-redux";
import {getAllCars} from "../../redux/slices/car.slice";
import Car from "./Car";

const AllCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars)

    useEffect(()=>{
        dispatch(getAllCars());
    },[])

    return (
        <div className='mt-4'>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default AllCars;