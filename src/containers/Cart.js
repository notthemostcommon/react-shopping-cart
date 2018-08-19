import React, { Component } from "react";
import { inventory } from "../inventory";
import ShoppingList from "../components/ShoppingList";
import { Grid, Divider } from "semantic-ui-react";
import CheckoutTotal from "../components/CheckoutTotal";
import QuestionsLink from "../components/QuestionsLink";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: inventory,
      listLength: 4
    };
  }

  renderList = items => {
    return items.map(item => {
      console.log(this.state.listLength);

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
          />
        )
      );
    });
  };

  render() {
    return (
      <div>
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
        <Divider />
        <Grid>
          <Grid.Column floated="left" width={4} >
          <QuestionsLink/>
          </Grid.Column>
          <Grid.Column floated="right" width={12}>
            <CheckoutTotal />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
