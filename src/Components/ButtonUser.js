import React, {useState} from 'react';

const ButtonUser = ({person,showInf}) => {

    // let [inf,setInf] = useState(false)
    // const clickInf = ()=>{
    //     console.log(person);
    //     setInf(!inf)
    // }
    return (
        <button onClick={()=>showInf(person.id)}>
        Click me
        </button>
    );
};

export default ButtonUser;