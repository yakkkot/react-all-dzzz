import React from 'react';

import {useNavigate} from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();
    return (
        <div className="h-[85px] bg-purple-700 py-2 px-2 flex items-center justify-end">
            <div className="flex items-center gap-4">
                <button
                    onClick={()=> navigate('/login')}
                    className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Login</button>
                <button
                    onClick={()=> navigate('/register')}
                    className="w-[100px] bg-cyan-500 border-2 border-cyan-500 rounded-xl py-2">Register</button>
            </div>
        </div>
    );
};

export default Header;