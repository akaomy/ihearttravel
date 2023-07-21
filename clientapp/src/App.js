import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import JournalListView from './components/JournalListView';
import JournalInfo from './components/JournalInfo';


const dummy_data = {
    'user':{
        'journals':[
            {
                'journal_name':'Eurotrip for 1 week, may 2021',
                'journal_info':[
                    {
                        'todos':[
                            {
                                'card_id':'98345mjk',
                                'card_name':'Camping Gear',
                                'card_content':[
                                    {
                                        'done':'false',
                                        'item_name':'tent'
                                    },
                                    {
                                        'done':'false',
                                        'item_name':'mats'
                                    },
                                    {
                                        'done':'false',
                                        'item_name':'sleeping bags'
                                    }
                                ],
                                'card_copy':'false',
                                'card_delete':'false'
                            },
                            {
                                'card_id':'86sdf',
                                'card_name':'Clothes',
                                'card_content':[
                                    {
                                        'done':'false',
                                        'item_name':'jackets'
                                    },
                                    {
                                        'done':'false',
                                        'item_name':'underwear'
                                    },
                                    {
                                        'done':'false',
                                        'item_name':'pants'
                                    }
                                ],
                                'card_copy':'false',
                                'card_delete':'false'
                            },
                            {
                                'card_id':'342gfdg',
                                'card_name':'Tickets',
                                'card_content':[
                                    {
                                        'done':'false',
                                        'item_name':'link to the email with tickets to yousemite'
                                    }
                                ],
                                'card_copy':'false',
                                'card_delete':'false'
                            }
                        ],
                        'map':[
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            }
                        ]
                    }
                ]
            },
            {
                'journal_name':'Eurotrip for 2 week, may 2022',
                'journal_info':[
                    {
                        'todo':[
                            {
                                'done':'true',
                                'todo_item':'one'
                            },
                            {
                                'done':'false',
                                'todo_item':'two'
                            },
                            {
                                'done':'false',
                                'todo_item':'three'
                            }
                        ],
                        'map':[
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            }
                        ]
                    }
                ]
            },
            {
                'journal_name':'Eurotrip for 3 weeks, may 2023',
                'journal_info':[
                    {
                        'todo':[
                            {
                                'done':'true',
                                'todo_item':'one'
                            },
                            {
                                'done':'false',
                                'todo_item':'two'
                            },
                            {
                                'done':'false',
                                'todo_item':'three'
                            }
                        ],
                        'map':[
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            },
                            {
                                'location':'123 Street Name Region name',
                                'comments':'Nice place for my dogs to play'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

const uniqueId = () => parseInt(Date.now() * Math.random()).toString();

const router = createBrowserRouter([
    { path: '/', element: <JournalListView data={dummy_data} /> }
]);

dummy_data.user.journals.map((journal) => 
    router.routes.push({
        id: uniqueId(),
        path: `${journal.journal_name}`,
        element:  <JournalInfo info={journal}/>,
    })
);
      
function App() {
    return (
        <>
            <h1>i heart my travel</h1>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

