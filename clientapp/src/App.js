import './App.css';
import JourneysListView from './components/JourneysListView';

const dummy_data = {
  "user": {
    "journals": [
      {
        "journal_name": "Eurotrip for 1 week, may 2021",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      },
      {
        "journal_name": "Eurotrip for 2 week, may 2022",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      },
      {
        "journal_name": "Eurotrip for 3 weeks, may 2023",
        "journal_info": [
          {
            "todo": [
              {
                "done": "true",
                "todo_item": "one"
              },
              {
                "done": "false",
                "todo_item": "two"
              },
              {
                "done": "false",
                "todo_item": "three"
              }
            ],
            "map": [
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              },
              {
                "location": "123 Street Name Region name",
                "comments": "Nice place for my dogs to play"
              }
            ]
          }
        ]
      }
    ]
  }
}
      
function App() {
  return (
    <div className="App">
      <h1>IHEART MY TRAVEL</h1>
      <JourneysListView data={dummy_data}/>
    </div>
  );
}

export default App;

