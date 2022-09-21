import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../Validators/car.validator";
import {carServices} from "../../Services";

const CarForm = ({setCars,infoAboutCars}) => {

    let xxx = false
    const {register,reset,setValue,handleSubmit,formState:{isValid,errors}} = useForm(
        {mode:'all',
        resolver:joiResolver(carValidator)})

    const submit = async (car)=>{
        const {data} = await carServices.create(car)
        setCars(prev=>[...prev,data])
        reset()
    }
    useEffect(()=>{
        setValue('model', 'KIA');
        setValue('price', '1999');
        setValue('year', '1999');
    },)
    return (
        <form
            className='my-2 mx-2 flex items-center gap-4 bg-gray-400 text-purple-50 border-2 py-2 px-6 border-gray-900 rounded-xl'
            onSubmit={handleSubmit(submit)}>
            <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                   placeholder={'model'} {...register('model')}/>
            {errors.model && <span className='text-red-700'>{errors.model.message}</span>}
            <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                   placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span className='text-red-700'>{errors.price.message}</span>}
            <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                   placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span className='text-red-700'>{errors.year.message}</span>}
            <button onClick={()=> !xxx} disabled={!isValid}
                    className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Save
            </button>
            <button onClick={()=>infoAboutCars()}>hihihihhihihihi</button>
        </form>
    );
};

export {CarForm};