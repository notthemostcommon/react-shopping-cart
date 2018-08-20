import React, { Component } from "react";
import { Grid, Divider, Input, Button } from "semantic-ui-react";

export default class CheckoutTotal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         promoCode: ""
      }
    }
    
  render() {
      console.log("checkout", this.props.priceTotal);
      
      let formattedPrice = this.props.priceTotal.toFixed(2)
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Column floated="left" width={8} >
          <h4> ENTER PROMOTIONAL CODE OR GIFT CARD</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <Input action="APPLY" placeholder="CODE OR CARD" />
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> SUB TOTAL</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <h3>${formattedPrice}</h3>
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> PROMOTION CODE {this.state.promoCode} APPLIED</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> ESTIMATED SHIPPING*</h4>
          <p>You qualify for free shipping because your order is over $50</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h3> ESTIMATED TOTAL</h3>
          <p>Tax will be applied during checkout</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          </Grid.Column>
          
          <Grid.Column  width={10} >
          </Grid.Column>
          <Grid.Column  width={3} textAlign="right">
          <h4><a href="#">CONTINUE SHOPPING</a></h4>
          </Grid.Column>
          <Grid.Column  width={3} textAlign="right">
          <Button primary>CHECKOUT</Button>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}
