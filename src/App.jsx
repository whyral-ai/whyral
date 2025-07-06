import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTES from './constants/routes';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/NotFound';
      // import Layout from './Layout';


function App() {
  return (
    <Router>
      {/* <Layout /> */}
      <div className='body'>

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
      </div>
            {/* <Layout /> */}

    </Router>
  );
}

export default App;



//design inspiration idea--> 
//https://www.avinashi.ai/     