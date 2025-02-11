import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/login";


export default function LinkRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}


