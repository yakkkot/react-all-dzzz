import React from 'react';

import css from './Car.module.css'
import {carServices} from "../../Services";

const Car = ({car,setCars,infoAboutCars}) => {
    const {id, model, price, year} = car;

    const deleteCar = async (id)=>{
        await carServices.deleteById(id)
        setCars(prev => [...prev.filter(value => value.id !== id)]);
    }

    // const updateCar = async (id,car)=>{
    //     setValue('model', 'BMW');
    // }


let xxx = {
    model: 'DEODEO',
    price: 1999,
    year: 1999,
}
    const updateCar = async ()=>{
       const {data} =  await carServices.updateById(id, xxx);
    }
    return (
        <div className={`${css.Car} py-2 px-4 mx-2 my-2 rounded-xl`}>
            <div className='w-[200px]'>
                <div className='text-[15px]'>id: {id}</div>
                <div className='text-[15px]'>model: {model}</div>
                <div className='text-[15px]'>price: {price}</div>
                <div className='text-[15px]'>year: {year}</div>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => {
                    // updateCar();
                    infoAboutCars({model,price,year})
                }}
                        className='bg-gray-400 text-purple-50 border-2 py-1 px-6 border-gray-900 rounded-xl'>Update
                </button>
                <button onClick={() => deleteCar(id)}
                        className='bg-gray-400 text-purple-50 border-2 py-1 px-6 border-gray-900 rounded-xl'>Delete
                </button>
            </div>
        </div>
    );
};

export {Car};