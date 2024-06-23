import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Login from './components/Login';
import InvoiceList from './components/InvoiceList';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get('/api/current_user');
            setUser(response.data);
        };

        fetchUser();
    }, []);

    return (
        <BrowserRouter>
            <div className="container">
                <Header user={user} setUser={setUser} />
                <Route exact path="/" component={user ? InvoiceList : Login} />
            </div>
        </BrowserRouter>
    );
};

export default App;
