import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';

const Login = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <Link to={ROUTES.DASHBOARD} className="text-green-500 underline">Login & Go to Dashboard</Link>
    </div>
  );
};

export default Login;
