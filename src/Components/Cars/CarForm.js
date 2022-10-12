import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {addCar,updateCarToServer} from "../../redux/slices/car.slice";
import {carServices} from "../../services/car.services";

const CarForm = () => {
    const dispatch = useDispatch();
    const oneCar = useSelector(state=> state.cars.updateCar)

    const submit = async (car) => {
        await dispatch(addCar(car));
        reset();
    };

    const {handleSubmit,reset,register,formState:{isValid,errors},setValue} = useForm({mode:"onSubmit"})

    const updateToServer = async (car) => {
        await dispatch(updateCarToServer([oneCar.id, car]));
        reset();
    };

    useEffect(()=>{
        setValue('model', oneCar?.model);
        setValue('price', oneCar?.price);
        setValue('year', oneCar?.year);
    },[oneCar])
    return (
        <div>
            <form
                className='my-2 mx-2 flex items-center gap-4 bg-gray-400 text-purple-50 border-2 py-2 px-6 border-gray-900 rounded-xl'>
                <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                       placeholder={'model'} {...register('model', {required: true})}/>
                {errors.model && <span className='text-red-700'>Enter correct model</span>}
                <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                       placeholder={'price'} {...register('price', {valueAsNumber: true, required: true})}/>
                {errors.price && <span className='text-red-700'>Enter correct price</span>}
                <input className='bg-gray-100 text-black border-2 px-1 border-gray-900 rounded-l' type="text"
                       placeholder={'year'} {...register('year', {valueAsNumber: true, required: true})}/>
                {errors.year && <span className='text-red-700'>Enter correct year</span>}
                {!oneCar ?
                    (<button
                             onClick={handleSubmit(submit)}
                             className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Save</button>)
                    :
                    <button
                        onClick={handleSubmit(updateToServer)}
                        className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Update
                    </button>}

                {/*<button*/}
                {/*    onClick={handleSubmit(submit)}*/}
                {/*    className='bg-gray-400 text-purple-50 border-2 py-0.5 px-6 border-gray-900 rounded-xl'>Save</button>*/}
            </form>
        </div>
    );
};

export default CarForm;