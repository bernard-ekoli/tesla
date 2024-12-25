import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Firstpage from "./firstpage";
import Orderindex from "./orderModel";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="/order_model_y" element={<Orderindex />} />
            </Routes>
        </Router>
    )
}

export default App
