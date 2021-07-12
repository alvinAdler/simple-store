import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';

import Item from './components/Item/Item'
import Basket from './components/Basket/Basket'

function App () {
  const [items, setItems] = useState([])
  const [itemCounter, setItemCounter] = useState({}) //Contains which item is being counted (name and amount)

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

  const handleItemsReset = () => {
    console.log("Reset all Items")
    console.log(itemCounter)
  }

  const handleItemsChange = (itemID, itemOperation) => {
    let dummyObj = {...itemCounter}

    //itemOperation is either increment or decrement
    switch (itemOperation) {
      case "increment": 
        if(!(itemID in itemCounter)){
          console.log("New item")
          dummyObj[itemID] = 1
        }else{
          console.log("Existing item")
          dummyObj[itemID] = dummyObj[itemID] + 1
        }

        setItemCounter({...dummyObj})
        break;
      case "decrement":
        console.log("Item " + itemID.toString() + " decremented")
        dummyObj = {...itemCounter}
        dummyObj[itemID] = dummyObj[itemID] - 1

        if(dummyObj[itemID] === 0){
          delete dummyObj[itemID]
        }

        setItemCounter({...dummyObj})
        break;
      default:
        break;
    }
  }

    return (    
      <div className="App container">
        <div className="sample-header jumbotron">
          <h1 className="display-4">Simple Store</h1>
          <p className="lead">We provide simple solutions for styling your room.</p>
          <hr className="my-4" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui rerum ipsam? Tempora quasi officia fuga suscipit, veritatis sed totam placeat error voluptatum, obcaecati similique. Exercitationem eaque qui ipsa labore!</p>
        </div>

        <Basket onAllItemReset = {handleItemsReset}/>

        {items.map((item, index) => {
          return(
            <Item key={index} 
            itemDetails={item} 
            itemCounter={itemCounter}
            onChangeQuantity={handleItemsChange}
            />
          )
        })}
        
      </div>
    );
}

export default App;
