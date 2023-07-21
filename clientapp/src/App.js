import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalTabs from './components/JournalTabs';

      
function App() {
    const [journals, setJournals] = useState([]);
    const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
    const router = createBrowserRouter([
        { path: '/journals', element: <JournalListView journals={journals} />}
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

    // add more paths to router
    // dynamic routes names for each journal
    // and open each journal
    journals.map((journal) => 
        router.routes.push({
            id: uniqueId(),
            path: `journals/${journal.journal_name}`,
            element:  <JournalTabs journalInfo={journal.journal_info} />,
        })
    );

    return (
        <>
            <h1>i heart my travel</h1>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

