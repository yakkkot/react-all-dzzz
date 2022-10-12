import React from 'react';

import CarForm from "./CarForm";
import AllCars from "./AllCars";
import {useSelector} from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TailSpin } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

AOS.init();



const CarsPage = () => {

    const {loading,error} = useSelector(state=> state.cars)

    return (
        <div>

            <CarForm/>
            <hr className='my-4 mx-2 border-1 border-neutral-800'/>
            {loading &&
                <div className="flex items-center justify-center">
                    <TailSpin
                        height="100"
                        width="90"
                        color="silver"
                        ariaLabel="tail-spin-loading"
                        radius="2"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /></div>}
            {error && <h1 className="text-4xl text-center text-red-700">{error}</h1>}
            <AllCars/>
        </div>
    );
};

export default CarsPage;