import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {carServices} from "../../Services";
import {Car} from "../Car/Car";


const Cars = () => {

    const [cars, setCars] = useState([])
    const [oneCar, setOneCar] = useState(null);

    useEffect(() => {
        carServices.getAll().then(({data}) => setCars(data));
    }, [cars])

    return (
        <div className='mt-4'>
            <CarForm setCars={setCars} oneCar={oneCar} setOneCar={setOneCar}/>
            <hr className='my-4 mx-2 border-1 border-neutral-800'/>
            {
                cars.map(car => <Car setCars={setCars} key={car.id} car={car}
                                     setOneCar={setOneCar}/>)
            }
        </div>
    );
};

export {Cars};