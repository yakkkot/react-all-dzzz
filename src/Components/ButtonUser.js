import React, {useState} from 'react';


const ButtonUser = ({person,showInf,sw}) => {

    return (
        <button onClick={() => {
            showInf(person.id);
            sw(person.id);
        }}>
            Click me
        </button>
    );
};

export default ButtonUser;
