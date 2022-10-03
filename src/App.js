import './App.css';

import MainLayout from "./Layout/MainLayout";
import {Route,Routes,Navigate} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegistrerPage/RegisterPage";
import CarsPage from "./Pages/CarsPage/CarsPage";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/login'}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/cars" element={<CarsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
