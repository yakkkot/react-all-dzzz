import React from 'react';

import {Link,useLocation} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";
import {setUser} from "../redux/slices/user.slice";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Header = () => {
const {pathname} = useLocation()
    const post = useSelector(state => state.posts.currentPost);
    const userLogin = useSelector(state => state.users.userLogin);
    const dispatch = useDispatch();

    return (
        <div className="h-[80px] w-full bg-red-500 flex items-center justify-between px-3">
            <div>
                <Link to="/users">
                    <button className="w-[100px] bg-blue-600 py-2 rounded-xl mr-4">Users</button>
                </Link>
                <Link to="/posts">
                    <button className="w-[100px] bg-blue-600 py-2 rounded-xl mr-4">Posts</button>
                </Link>
                <Link to="/cars">
                    <button className="w-[100px] bg-blue-600 py-2 rounded-xl mr-10">Cars</button>
                </Link>
                {userLogin &&
                    <button onClick={() => dispatch(setUser(''))} className="w-[100px] bg-blue-600 py-2 rounded-xl">Log
                        Out</button>
                }

            </div>
            <div className="w-[50%]">
                {post && pathname==="/posts" &&
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="overflow-hidden max-h-[70px]">
                        {JSON.stringify(post)}
                    </div>}
            </div>
        </div>
    );
};

export default Header;