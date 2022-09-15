import React from 'react';
import ButtonUser from "./ButtonUser";
const User = ({person,showInf}) => {
    return (
        <div className='flex items-center gap-8 my-2'>
          <div className='w-[250px]'> <h2>{person.id} - {person.name}</h2> </div>
            <ButtonUser person={person} showInf={showInf}/>
        </div>
    );
};

export default User;