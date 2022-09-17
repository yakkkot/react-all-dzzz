import React from 'react';

const InformationUser = ({user}) => {
    return (
        <div>
            <h3>{user.name} - {user.age}</h3>
        </div>
    );
};

export default InformationUser;