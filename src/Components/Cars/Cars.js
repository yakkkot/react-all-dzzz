import React, {useEffect, useState} from 'react';
import {CarForm} from "../CarForm/CarForm";
import {carServices} from "../../Services";
import {Car} from "../Car/Car";


const Cars = () => {

    const [cars,setCars] = useState([])
    const [update,setUpdate] = useState(null)

    useEffect(()=> {
        carServices.getAll().then(({data}) => setCars(data));
    },[])


    const infoAboutCars = async (obj)=>{
        console.log(obj)
        return obj
    }


    return (
        <div>
            <CarForm setCars={setCars} setUpdate={setUpdate} infoAboutCars={infoAboutCars}/>
            <hr/>
            {
                cars.map(car => <Car setCars={setCars} key={car.id} car={car} setUpdate={setUpdate}
                                     infoAboutCars={infoAboutCars}/>)
            }
        </div>
    );
};

export {Cars};