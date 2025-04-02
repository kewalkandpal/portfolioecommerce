import { createRoot } from 'react-dom/client'
import {HashRouter as Router} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
    <Router>
    <Provider store={store}>
        <App />
        <ToastContainer 
          position="top-right"
          autoClose={1500}
          newestOnTop={true}
          closeOnClick={true}
          draggable
          // theme="colored"
          // bodyClassName = "toastBody"
        />
    </Provider>
    </Router>

)
