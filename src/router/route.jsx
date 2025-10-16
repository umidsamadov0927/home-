import {Route, Routes} from "react-router-dom";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Tutorial from "../pages/tutorial.jsx";
import Error from "../pages/error.jsx";
import Contact from "../pages/Contact.jsx";
import Api from "../pages/api.jsx";
import ProductById from "../pages/productById.jsx";
import Document from "../pages/document.jsx";

export default function Routers() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="document" element={<Document/>}></Route>
                </Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/tutorial" element={<Tutorial/>}/>
                <Route path="/api" element={<Api/>}/>
                <Route path="/product/:id" element={<ProductById/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </>
    )
}