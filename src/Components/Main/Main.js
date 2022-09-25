import React from 'react';

import Todos from "../Todos/Todos";
import {Link,Routes,Route} from "react-router-dom"
import Albums from "../Albums/Albums";
import Comments from "../Comments/Comments";
import OneComment from "../OneComment/OneComment";
import CommentDetail from "../CommentDetails/CommentDetail";
import Posts from "../Posts/Posts";
const Main = () => {
    return (
        <div>
            {/*<Todos/>*/}
            <ul className="my-4 flex flex-col gap-2 items-center justify-center">
                <li className="border-2 border-green-800 w-[70%] font-bold">
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="border-2 border-green-800 w-[70%] font-bold">
                    <Link to={'/todos'}>Todos</Link>
                </li>
                <li className="border-2 border-green-800 w-[70%] font-bold">
                    <Link to={'/albums'}>Albums</Link>
                </li>
                <li className="border-2 border-green-800 w-[70%] font-bold">
                    <Link to={'/comments'}>Comments</Link>
                </li>
            </ul>
            <hr/>

            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={'post:id'} element={<Posts/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default Main;