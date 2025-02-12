import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/login";
import Error from "../pages/Error";


export default function LinkRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}


