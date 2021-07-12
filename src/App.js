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
        <div className="sample-header jumbotron">
          <h1 className="display-4">Simple Store</h1>
          <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor laudantium dolorem suscipit consequuntur maxime numquam repudiandae perferendis reiciendis voluptatibus, doloremque iusto assumenda pariatur iste minus eos sequi? Animi, ullam!</p>
          <hr className="my-4" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum cupiditate quaerat tempore perspiciatis suscipit neque autem fuga veniam non velit, sequi facilis commodi harum laboriosam optio. Consequatur, optio reprehenderit?</p>
        </div>
        {items.map((item, index) => {
          return(
            <Item key={index} itemDetails={item}/>
          )
        })}
        
      </div>
    );
}

export default App;
