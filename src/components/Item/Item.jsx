import React, { Component } from 'react'
import Counter from '../Counter/Counter'

import {FaCaretSquareDown, FaCaretSquareUp} from 'react-icons/fa'

import './Item_master.css'

class Item extends Component {
    state = {
        currentItemDisplay: false
    }

    convertToRupiah = (price) => {
        return "Rp. " + price.toString()
    }

    handleDescDisplay = () => {
        this.setState({currentItemDisplay: !this.state.currentItemDisplay})
    }

    render() {
        /*
            Props can be destructured into: 
            1. itemName
            2. itemPrice
            3. itemImageURL
            4. itemMotto
            5. itemDesc
        */
        const {
            itemName, 
            itemPrice, 
            imageUrl, 
            itemMotto, 
            itemDesc} = this.props.itemDetails 

        return ( 
            <div className="item-container">
                <section className="main-section">
                    <div className="item-info">
                        <span className="item-name">{itemName}</span>
                        <span className="item-price">{this.convertToRupiah(itemPrice)}</span>
                        {this.state.currentItemDisplay === true ? 
                            <FaCaretSquareUp className="item-dropdown" onClick={this.handleDescDisplay}/>
                            :
                            <FaCaretSquareDown className="item-dropdown" onClick={this.handleDescDisplay}/>
                        }
                    </div>
                    <Counter/>
                </section>
                {this.state.currentItemDisplay &&
                    <section className="desc-section">
                        <img src={imageUrl} 
                        alt="Not Found" 
                        className="item-image"
                        />
                        <div className="item-desc">
                            <h4>{itemMotto}</h4>
                            {itemDesc.split("|||").map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>
                    </section>
                }
            </div>
        );
    }
}
 
export default Item;