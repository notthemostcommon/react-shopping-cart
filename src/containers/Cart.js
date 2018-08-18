import React, { Component } from 'react'; 
import { inventory } from '../inventory'; 
import ShoppingList from '../components/ShoppingList';

export default class Cart extends Component {
constructor(props) {
  super(props)

  this.state = {
     items: inventory
  }
}

renderList = items => {
    return items.map(item => {
        console.log(item.src);
        
        // const imgUrl = require(`${item.src}`);  
        // console.log(imgUrl);
        
        return (
            <ShoppingList
                key={item.styleNumber}
                image={item.src}
                name={item.name} 
                styleNumber={item.styleNumber} 
                color={item.color}
                alt={item.alt} 
                size={item.size}
                price={item.price}
                render={item.render} 
                />
        )
    })
}

  render() {
      
    return (
      <div>
        <h1>Cart.js</h1>
        {this.renderList(this.state.items)}
      </div>
    )
  }
}