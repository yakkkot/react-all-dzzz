import React from 'react';
import {authServices, carsServices} from "../Services/auth.services";

const Car = ({car,setCars}) => {

    const addPhoto = async (e)=>{
        const formData = new FormData();
        const [file] = e.target.files;
        formData.append('photo', file);
        const {data} = await carsServices.addPhotoById(car.id, formData);
        setCars(cars=>{
            const find = cars.find(car=>car.id === cars.id);
            Object.assign(find, {...data, photo:URL.createObjectURL(file)})
            return [...cars]
        })
    }
    return (
        <div className="bg-blue-400 border-2 border-gray-900 rounded-xl py-2 px-2 my-2 mx-2">
            <div>
                <div>id: {car.id}</div>
                <div>model: {car.model}</div>
                <div>price: {car.price}</div>
                <div>year: {car.year}</div>
            </div>
            <div>
                {car.photo ?
                    <img src={car.photo} alt=""/>
                    :
                    <input type="file" onChange={addPhoto}/>

                }
            </div>
        </div>
    );
};

export default Car;