import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';

import Item from './components/Item/Item'
import Basket from './components/Basket/Basket'

function App () {
  const [items, setItems] = useState([])
  const [itemCounter, setItemCounter] = useState({
    totalCounter: 0, //The total number of item within the itemList
    itemList: [] //List of items that contains the item name and quantity
  })

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
          <p className="lead">We provide simple solutions for styling your room.</p>
          <hr className="my-4" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui rerum ipsam? Tempora quasi officia fuga suscipit, veritatis sed totam placeat error voluptatum, obcaecati similique. Exercitationem eaque qui ipsa labore!</p>
        </div>

        <Basket/>

        {items.map((item, index) => {
          return(
            <Item key={index} itemDetails={item}/>
          )
        })}
        
      </div>
    );
}

export default App;
