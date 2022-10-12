import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import UserPage from "./Components/UserPage";
import LoginPage from "./Components/LoginPage";
import PostsPage from "./Components/PostsPage";
import MainLayout from "./Layouts/MainLayout";
import RequireAuth from "./Layouts/RequireAuth";
import CarsPage from "./Components/Cars/CarsPage";

function App() {
    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>}/>

                <Route path={'/users'} element={
                    <RequireAuth>
                        <UserPage/>
                    </RequireAuth>}/>
                <Route path={'/posts'} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>}/>
                <Route path={'/cars'} element={
                    <RequireAuth>
                        <CarsPage/>
                    </RequireAuth>}/>
            </Route>
        </Routes>
    );
}

export default App;
