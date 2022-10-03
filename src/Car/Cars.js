import React from 'react';
import Car from "./Car";

const Cars = ({cars,setCars}) => {

    return (
        <div>
            <div>

                {
                    cars.map(car => <Car key={car.id} car={car} setCars={setCars}/>)
                }
            </div>
            <hr/>
        </div>
    );
};

export default Cars;