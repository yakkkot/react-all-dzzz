import React, {useEffect, useReducer, useRef} from 'react';
import Cat from "./Cat";
import Dog from "./Dog";
    const init = (initialValue)=>{
        return {cats: [{initialValue,id:0}], dogs: [{initialValue,id:0}]};
    }


const Main = () => {

    let cat = useRef();
    let dog = useRef();

    const reducer = (state,action)=>{
        switch (action.type){
            case "AddCat":
                return {...state, cats: [...state.cats,{initialValue:cat.current.value,id:new Date()}]};
            case "AddDog" :
                return {...state, dogs: [...state.dogs,{initialValue:dog.current.value,id:new Date()}]};
            case "DeleteCat" :
                return {...state, cats: [...state.cats.filter(cat => cat.id!==action._idCats)]};
            case "DeleteDog" :
                return {...state, dogs: [...state.dogs.filter(dog => dog.id!==action._idDogs)]};
        }
        return {...state}
    }

    const [state, dispatch] = useReducer(reducer, '', init)

    return (
        <div>
            <div className="flex items-center justify-evenly my-4 border-b-2 border-b-blue-800 py-4">
                <div>
                    <h2 className="text-2xl font-bold mb-3">ADD CATS</h2>
                    <input className="bg-blue-900 py-2 px-2 border-2 rounded-xl text-white" placeholder="Add text"
                           type="text"
                           ref={cat}/>
                    <button onClick={async () => {
                        {
                            await dispatch({type: "AddCat"});
                            cat.current.value = '';
                        }
                    }} className="ml-4 py-2 px-6 bg-blue-400 border-2 border-blue-400 rounded-l">Click me
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">ADD DOGS</h2>
                    <input className="bg-blue-900 py-2 px-2 border-2 rounded-xl text-white" placeholder="Add text"
                           type="text"
                           ref={dog}/>
                    <button onClick={async () => {
                        {
                            await dispatch({type: "AddDog"});
                            dog.current.value = '';
                        }
                    }}
                            className="ml-4 py-2 px-6 bg-blue-400 border-2 border-blue-400 rounded-l"> Click me
                    </button>
                </div>


            </div>
            <div className="flex">
                <div className="flex items-center justify-around my-4 flex-col w-[50%]">
                    {
                        state.cats.map(value => <Cat value={value} dispatch={dispatch} key={value.initialValue}/>)
                    }
                </div>
                <div className="flex items-center justify-around my-4 flex-col w-[50%]">
                    {
                        state.dogs.map(value => <Dog value={value} dispatch={dispatch} key={value.initialValue}/>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Main;