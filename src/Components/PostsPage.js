import React, {useEffect} from 'react';

import {useDispatch,useSelector} from "react-redux";
import {getAll} from "../redux/slices/posts.slice"
import Post from "./Post";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TailSpin} from "react-loader-spinner";

AOS.init();

const PostsPage = () => {
    const dispatch = useDispatch();
    const {posts,loading,error} = useSelector(state=> state.posts)

    useEffect(()=>{
        dispatch(getAll());
    },[])

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
            data-aos="fade-down"
            data-aos-duration="1000"
             className="flex items-center justify-between my-2 py-2 px-2 border-2 border-gray-900 rounded-xl w-full">
            <div className="flex flex-wrap gap-2 justify-between my-2">
                {
                    posts.map(value=> <Post key={value.id} post={value}/>)
                }
            </div>

        </div>}
        </>
    );
};

export default PostsPage;