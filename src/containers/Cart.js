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
      subTotal: 0,
      promoCode: "",
      promoDiscount: 0.1,
      promoPrice: 0,
      estimatedTotal: 0, 
    };

    this.updateSubTotal = this.updateSubTotal.bind(this);
    this.getPromoCode = this.getPromoCode.bind(this);
    this.promoDiscount = this.promoDiscount.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this); 
  }

  componentDidMount = () => {
    let renderedList = [];
    let priceTotal = [];
    let totalAmount = []; 

    this.state.items.map(item => {
      item.quantOrdered > 0 && renderedList.push(item);
      item.quantOrdered > 0 &&
        priceTotal.push({
          price: item.price,
          quantity: item.quantOrdered
        });
    });
    renderedList.map(item => {      
      totalAmount.push(item.price * item.quantOrdered);
    });
    let totalPrice = totalAmount.reduce((total, current) => {
      return total + current;
    }, 0);    

    this.setState({
      chosenItems: renderedList,
      listLength: renderedList.length,
      subTotal: totalPrice, 
      estimatedTotal: totalPrice,
    });
  };

  calculateSubTotal = () => {
    
    let totalAmount = [];    
    this.state.chosenItems.map(item => {      
      totalAmount.push(item.price * item.quantOrdered);
    });
    let totalPrice = totalAmount.reduce((total, current) => {
      return total + current;
    }, 0);    
    this.setState({ subTotal: totalPrice, estimatedTotal: totalPrice });
  }

  updateSubTotal = (e) => {
    e.preventDefault(); 
    this.calculateSubTotal(); 
  };

  calculateEstimatedTotal = () => {
    let total = this.state.subTotal - this.state.promoPrice;
    this.setState({ estimatedTotal: total });
  };

  getPromoCode = e => {
    this.setState({ promoCode: e.target.value });
    this.promoDiscount();
  };

  promoDiscount = () => {
    let discountPrice = this.state.subTotal * this.state.promoDiscount;
    this.setState({ promoPrice: discountPrice });
    this.calculateEstimatedTotal();
  };

  removeItem = styleNumber => {    
    let chosenItems = [ ...this.state.chosenItems ];
      const index = chosenItems.map(item => item.styleNumber).indexOf(styleNumber);
      chosenItems.splice(index, 1);
      
      let totalAmount = [];    
      chosenItems.map(item => {      
        totalAmount.push(item.price * item.quantOrdered);
      });
      console.log(chosenItems, index, totalAmount);
      
      let totalPrice = totalAmount.reduce((total, current) => {
        return total + current;
      }, 0);    
      this.setState({ chosenItems: chosenItems, subTotal: totalPrice, estimatedTotal: totalPrice });
    // set state of chosenItems with new array 
    // this.setState({ chosenItems: chosenItems });

    // this.calculateSubTotal(); 
  };

  updateQuantity = styleNumber => e => {
    console.log("inside updateQuantity");
    
    // copy state of chosenItems and then map through it to find the item being updated, 
    // update the item, push updated and non updated items back into array and 
    let chosenItems = [{ ...this.state.chosenItems }];
    this.state.chosenItems.map(item => {
      item.styleNumber === styleNumber
        ? chosenItems.push({ ...item, quantOrdered: e.target.value })
        : chosenItems.push({ ...item });
    });
    chosenItems.shift(); 
    this.setState({chosenItems: chosenItems})
    
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
            quantity={item.quantOrdered}
            colorOptions={item.colorOptions}
            updateTotal={this.updateSubTotal}
            updateQuantity={this.updateQuantity}
            removeItem={this.removeItem}
          />
        )
      );
    });
  };

  render() {
    console.log("this state in render", this.state);

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
          {this.renderList(this.state.chosenItems)} <Divider />
          <Grid>
            <Grid.Column floated="left" width={4}>
              <QuestionsLink />
            </Grid.Column>
            <Grid.Column floated="right" width={12}>
             {/* {this.state.subTotal && */}
                <CheckoutTotal
                subTotal={this.state.subTotal}
                getPromoCode={this.getPromoCode}
                promoCode={this.state.promoCode}
                promoPrice={this.state.promoPrice}
                promoDiscount={this.promoDiscount}
                estimatedTotal={this.state.estimatedTotal}
                />
              {/* } */}
              
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
