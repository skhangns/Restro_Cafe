import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from '../src/containers/Home';
import { BrowserRouter } from 'react-router-dom';

const Router = () => {
    return (
        <>
           <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>} />
            </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
