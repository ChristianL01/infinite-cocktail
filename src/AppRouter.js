import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import FindByLetter from './FindByLetter';
import SearchByName from './SearchByName';

function AppRouter(props) {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/random" element={
                    <Homepage />
                }/>

                <Route path="/findbyletter" element={
                    <FindByLetter />
                } />

                <Route path="/searchbyname" element={
                    <SearchByName />
                }/>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;