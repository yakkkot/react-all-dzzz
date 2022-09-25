import React, {useEffect, useState} from 'react';

import {todosServices} from "../../Services";
import OneTodo from "./OneTodo";

const Todos = () => {

    const [todo,setTodo] = useState([])

    useEffect(()=>{
        todosServices.getAll().then(({data}) => setTodo(data));
    },[])
    return (
        <div className="border-2 mx-2 my-2 px-2 border-green-800">
            <div className="flex flex-wrap items-center justify-between my-2">
                {
                    todo.map(value => <OneTodo value={value} key={value.id}/>)
                }
            </div>
        </div>
    );
};

export default Todos;