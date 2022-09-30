import React from 'react';

const Dog = ({dispatch,value}) => {
    return (
        <div className="flex gap-4 items-center">
            <h3 className="font-bold">{value.initialValue}</h3>
            {value.initialValue &&
                <button
                    onClick={() => {
                        dispatch({type: "DeleteDog", _idDogs: value.id})
                    }}
                    className="ml-4 py-2 px-6 bg-blue-400 border-2 border-blue-400 rounded-l">Delete
                    me</button>
            }
        </div>
    );
};

export default Dog;