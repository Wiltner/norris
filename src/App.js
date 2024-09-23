import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    function loadApi(){
      let url = "https://api.chucknorris.io/jokes/random";
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json)
        setJokes(json);
      })
    }
    loadApi();
  }, []); 
  return(
    <div>
      <h1 className='Title'>Chuck Norris Jokes</h1>
      <p className='jokes'>{jokes.value}</p>
    </div>
  )
}

export default App;
