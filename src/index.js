import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Certificate from "./components/certificate.js";
import Activity from "./components/activity.js";
import Volunteer from "./components/volunteer.js";
import { BrowserRouter, Routes,Route} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          
          <Route path="Certificate" element={<Certificate/>} />
          <Route path="Activity" element={<Activity/>} />
          <Route path="Volunteer" element={<Volunteer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


