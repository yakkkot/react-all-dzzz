import React, {useEffect, useState} from 'react';
import {todosServices} from "../../Services";


const Todos = () => {

    const [todo,setTodo] = useState([])

    useEffect(()=>{
        todosServices.getAll().then(({data}) => setTodo(data));
    },[])
    return (
        <div>
            <div>
                {
                    todo.map(value => <div>{value.id}. {value.title}</div>)
                }
            </div>
        </div>
    );
};

export default Todos;