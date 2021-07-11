import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';

import Item from './components/Item/Item'

function App () {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/items"
    })
    .then((res) => {
      setItems(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

    return (
      <div className="App container">
        {items.map((item, index) => {
          return(
            <Item key={index} itemDetails={item}/>
          )
        })}
      </div>
    );
}

export default App;
