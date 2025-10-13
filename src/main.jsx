import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Routers from './router/route.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routers/>
    </BrowserRouter>,
)
