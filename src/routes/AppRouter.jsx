import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccountBox } from '../components/accountBox';
import Home from '../components/accountBox/Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/logged'
                    element={<Home />}
                    isAuthenticated={true}
                />
                <Route
                    exact
                    path='/'
                    element={<AccountBox />}
                    isAuthenticated={true}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
