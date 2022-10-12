import React, {useEffect, useState} from 'react';

import {useSelector,useDispatch} from "react-redux";
import {userServices} from "../services/user.services";
import {getAll} from "../redux/slices/user.slice"
import User from "./User";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TailSpin} from "react-loader-spinner";

AOS.init();
const UserPage = () => {
    const dispatch = useDispatch();
    const {users,loading,error,currentUser} = useSelector(state => state.users);


    useEffect(() => {
        dispatch(getAll());
    }, []);
    return (
        <>
            {loading &&
                <div className="flex items-center justify-center">
                    <TailSpin
                        height="100"
                        width="90"
                        color="silver"
                        ariaLabel="tail-spin-loading"
                        radius="2"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /></div>}
            {error && <h1 className="text-4xl text-center text-red-700">{error}</h1>}
            {!loading && !error &&

                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="flex justify-between">
                    <div className="w-[50%]">
                        {
                            users.map(value => <User key={value.id} user={value}/>)
                        }
                    </div>
                    <div className="w-[45%]">
                        {currentUser &&
                            <div data-aos="fade-down-left">
                                {JSON.stringify(currentUser)}
                            </div>
                        }
                    </div>
                </div>}
        </>
    );
};

export default UserPage;