import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                {/* Other Routes go here */}
            </Routes>
        </AnimatePresence>
    );
}

export default function App() {
    return (
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
    );
}