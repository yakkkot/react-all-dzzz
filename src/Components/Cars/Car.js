import React from 'react';

import {useDispatch} from "react-redux";
import {deleteCar} from "../../redux/slices/car.slice";
import {updateCar} from "../../redux/slices/car.slice";

const Car = ({car}) => {

    const dispatch = useDispatch()
    const {id, model, price, year} = car;
    return (
        <div className='one_car py-2 px-4 mx-2 my-2 rounded-xl'>
            <div className='w-[200px] text-[15px]'>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className='flex gap-4'>
                <button
                    onClick={()=> dispatch(updateCar(id))}
                        className='bg-gray-400 text-purple-50 border-2 py-1 px-6 border-gray-900 rounded-xl'>Update
                </button>
                <button onClick={()=> dispatch(deleteCar(id))}
                        className='bg-gray-400 text-purple-50 border-2 py-1 px-6 border-gray-900 rounded-xl'>Delete
                </button>
            </div>
        </div>
    );
};

export default Car;