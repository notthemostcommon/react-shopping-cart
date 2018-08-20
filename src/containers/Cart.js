import React, { Component } from "react";
import { inventory } from "../inventory";
import ShoppingList from "../components/ShoppingList";
import { Grid, Divider, Container } from "semantic-ui-react";
import CheckoutTotal from "../components/CheckoutTotal";
import QuestionsLink from "../components/QuestionsLink";


export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: inventory,
      listLength: 0,
      chosenItems: [],
      totalAmount: [], 
      priceTotal: 0, 
       
    };

    this.updateTotal = this.updateTotal.bind(this);
  }

  componentDidMount = () => {
    let renderedList = [];
    let priceTotal = []; 
    console.log("priceTotal", priceTotal);
    
    this.state.items.map(item => {
      item.render && renderedList.push(item), 
      item.render && priceTotal.push(item.price); 
    });
    this.setState({
      chosenItems: renderedList,
      listLength: renderedList.length, 
      totalAmount: priceTotal, 
    });
    this.updateTotal(priceTotal)
  }
                 
  updateTotal = (price) => {
    let totalAmount = []; 
    console.log(this.state.chosenItems);
    
    // let { totalAmount } = this.state;
    // this.setState({totalAmount: [...totalAmount,price ]})
    // this.state.chosenItems.map(item => {
    //   return totalAmount.push(item.price)
      
    // });
    let totalPrice = price.reduce( (total, current) => {
      return total + current
    }, 0)
    this.setState({priceTotal: totalPrice})
    console.log("totalAmount, totalPrice", totalPrice);
    
  };

  renderList = items => {
    return items.map(item => {
      return (
        item.render && (
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
            colorOptions={item.colorOptions}
            updateTotal={this.updateTotal}
          />
        )
      );
    });
  };

  render() {
    
    // console.log("this state in render", this.state);

    return (
      <div>
        <Container>
          <h1>YOUR SHOPPING CART</h1>
          <p>
            If the cart if completely empty then we shall again add back the
            products for you
          </p>

          <Grid divided="vertically">
            <Grid.Row>
              <Grid.Column width={3}>
                <h4> {this.state.listLength} ITEMS </h4>
              </Grid.Column>
              <Grid.Column width={6}>
                <h4>DESCRIPTION</h4>
              </Grid.Column>
              <Grid.Column width={2} textAlign="center">
                <h4>SIZE</h4>
              </Grid.Column>
              <Grid.Column width={2} textAlign="center">
                <h4>QTY</h4>
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                <h4>PRICE</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          
          {this.renderList(this.state.items)}
]          <Divider />
          <Grid>
            <Grid.Column floated="left" width={4}>
              <QuestionsLink />
            </Grid.Column>
            <Grid.Column floated="right" width={12}>
              {this.state.priceTotal && <CheckoutTotal priceTotal={this.state.priceTotal}/>}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
