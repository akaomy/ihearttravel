import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalTabs from './components/JournalTabs';
import { strings } from './strings';

      
function App() {
    const [journals, setJournals] = useState([]);
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
    console.log(journals)

    // add more paths to router
    // dynamic routes names for each journal
    // and open each journal
    journals.map((journal) => 
        router.routes.push({
            id: journal.id,
            path: `journals/${journal.JournalName}`,
            element:  <JournalTabs journalInfo={journal} />,
        })
    );

    return (
        <>
            <h1>{strings.appLogo}</h1>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

