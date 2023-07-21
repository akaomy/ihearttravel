import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalInfo from './components/JournalInfo';

      
function App() {
    const [journals, setJournals] = useState([]);
    const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
    const router = createBrowserRouter([
        { path: '/journals', element: <JournalListView data={journals} /> }
    ]);

    const getJournals = () => {
        fetch('http://localhost:3030/journals', {
            method: 'GET',
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setJournals(data)
            })
            .catch((err) => console.log('error ', err));
    };
    
    useEffect(() => {
        getJournals();
    }, []);


    journals.map((journal) => 
        router.routes.push({
            id: uniqueId(),
            path: `${journal.journal_name}`,
            element:  <JournalInfo journal={journal}/>,
        })
    );
    
    journals.map((journal) => {
        console.log('42', journal);
    });

    return (
        <>
            <h1>i heart my travel</h1>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

