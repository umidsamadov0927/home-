import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Routers from './router/route.jsx'
import {Provider} from 'react-redux'
import {store} from './state/store.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routers/>
        </Provider>
    </BrowserRouter>,
)
