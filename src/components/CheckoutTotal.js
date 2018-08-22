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
    //   console.log("checkout", this.props);
      let finalPrice = (this.props.estimatedTotal - this.props.promoPrice).toFixed(2)
      let formattedSubTotal = this.props.subTotal.toFixed(2); 
      let formattedTotal = this.props.estimatedTotal.toFixed(2)
      let formattedDiscount = this.props.promoPrice.toFixed(2)

    return (
      <div>
        <Grid divided="vertically">
          <Grid.Column floated="left" width={8} >
          <h4> ENTER PROMOTIONAL CODE OR GIFT CARD</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <Input 
          action="APPLY" 
          placeholder="CODE OR CARD" 
          onBlur={this.props.getPromoCode}
          onSubmit={this.props.promoDiscount} />
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> SUB TOTAL</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <h3>${formattedSubTotal}</h3>
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> PROMOTION CODE {this.props.promoCode.toUpperCase()} APPLIED</h4>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          {this.props.promoPrice != 0 ?  <h3>${formattedDiscount}</h3> : ""}
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h4> ESTIMATED SHIPPING*</h4>
          <p>You qualify for free shipping because your order is over $50</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <p>FREE</p>
          </Grid.Column>

          <Grid.Column floated="left" width={8} >
          <h3> ESTIMATED TOTAL</h3>
          <p>Tax will be applied during checkout</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8} textAlign="right">
          <h2>{finalPrice}</h2>
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
