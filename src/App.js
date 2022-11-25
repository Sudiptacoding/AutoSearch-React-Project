import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './Home/Home';

// step 1 : first new tarminal;
// step 2 : $ npm install axios

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestion, setSuggesTion] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setUsers(response.data)
    }
    loadUsers();
  }, []);

  const onChangeHandelar = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex)
      })
    }
    setSuggesTion(matches);
    setText(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={(e) => onChangeHandelar(e.target.value)} value={text} />
      <div>
        {
          suggestion && suggestion.map((suggestion, i) =>
            <div key={i}>
              <div>
                {
                  <Home suggestion={suggestion}></Home>
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
