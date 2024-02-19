import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalTabs from './components/JournalTabs';
import JournalDialog from './components/uiReusables/JournalDialog';
import { strings } from './strings';

      
function App() {
    const [journals, setJournals] = useState([]);
    const router = createBrowserRouter([
        { path: '/journals', element: <JournalListView journals={journals} />},
        { path: '/journals/create', element: <JournalDialog />}
    ]);

    // is int't it suppose to be in a separate file?
    const getJournals = () => {
        // http://localhost:3030/journals for mock data server
        fetch('http://localhost:4400/journals', {
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

