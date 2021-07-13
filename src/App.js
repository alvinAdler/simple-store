import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

import './App.css';

import Item from './components/Item/Item'
import Basket from './components/Basket/Basket'


function App () {
  const [items, setItems] = useState([])
  const quantityCounter = useRef(0)
  const itemsTotal = useRef(0)
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

  const handleItemsCheckout = () => {
    console.log("Items Checked out")

    Swal.fire({
      icon: "question",
      title: "Checking out",
      text: "Total Count is " + quantityCounter.current.toString() + " and total price is: " + itemsTotal.current.toString(),
      confirmButtonText: "Checkout Now",
      confirmButtonColor: "#2285e4",
      showCancelButton: true,
      cancelButtonColor: "#eb4034",
    })
    .then((res) => {
      if(res.isConfirmed){
        /*
        Do the operations for payment


        */

        setItemCounter({})

        Swal.fire({
          icon: "success",
          title: "Successfully Checked Out",
          text: "Please come again",
          confirmButtonText: "dismiss"
        })
      }
    })
  }

  const handleItemsReset = () => {
    console.log("Reset all Items")
    setItemCounter({})
  }

  const getPrice = (itemID) => {
    for(let item in items){
      if(items[item].id === itemID){
        return items[item].itemPrice
      }
    }
  }

  const handleItemRemove = (itemID) => {
    delete itemCounter[itemID]
    setItems(items.filter((item) => item.id !== itemID))
    setItemCounter({...itemCounter})
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

        quantityCounter.current = quantityCounter.current + 1
        
        itemsTotal.current = itemsTotal.current + getPrice(itemID) 

        setItemCounter({...dummyObj})

        break;

      case "decrement":
        console.log("Item " + itemID.toString() + " decremented")
        dummyObj = {...itemCounter}
        dummyObj[itemID] = dummyObj[itemID] - 1

        if(dummyObj[itemID] === 0){
          delete dummyObj[itemID]
        }

        quantityCounter.current = quantityCounter.current - 1
        itemsTotal.current = itemsTotal.current - getPrice(itemID) 

        setItemCounter({...dummyObj})
        
        break;

      default:
        break;
    }

    console.log("===============SEPARATOR===============")
  }



    return (    
      <div className="App container">
        <div className="sample-header jumbotron">
          <h1 className="display-4">Simple Store</h1>
          <p className="lead">We provide simple solutions for styling your room.</p>
          <hr className="my-4" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui rerum ipsam? Tempora quasi officia fuga suscipit, veritatis sed totam placeat error voluptatum, obcaecati similique. Exercitationem eaque qui ipsa labore!</p>
        </div>

        <Basket 
        onAllItemReset = {handleItemsReset}
        onItemsCheckout = {handleItemsCheckout}
        itemsTotal = {itemsTotal.current}
        itemsQuantity = {quantityCounter.current}
        />

        {items.map((item, index) => {
          return(
            <Item key={index} 
            itemDetails={item} 
            itemCounter={itemCounter}
            onChangeQuantity={handleItemsChange}
            onItemRemove = {handleItemRemove}
            />
          )
        })}
        
      </div>
    );
}

export default App;
