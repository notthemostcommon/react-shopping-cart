import React, { Component } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import EditItem from "./EditItem";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shirtSize: "",
      quantity: 1,
      price: ""
    };
    this.updateShirtSize = this.updateShirtSize.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
    this.updatePrice = this.updatePrice.bind(this); 
  }

  componentDidMount = () => {
    const shirtSize = this.props.size[
      Math.floor(Math.random() * this.props.size.length)
    ];
    const price = (this.props.price * parseInt(this.state.quantity)).toFixed(2);

    this.setState({ shirtSize: shirtSize, price: price });
  };

  updateShirtSize = (e, { value }) => {
    this.setState({ shirtSize: value });
  };

//   updateQuantity = e => {
//       console.log("inside updateQuantity");
      
//     this.setState({ quantity: e.target.value });
//     this.updatePrice(e.target.value);
//     console.log(this.props.quantity);
    
//   };

  updatePrice = (quant) => {
      console.log("inside updatePrice");
      
    const price = (this.state.price * quant).toFixed(2);
    this.setState({ price: price });

  };

  render() {
    // console.log("shoppinglist state", this.state);
    const editButtonStyle = {display: "flex", flexDirection: "row"}; 
    const price = (this.props.price.toFixed(2));

    const upperName = `${this.props.name}`.toUpperCase();
    return (
      <div>
        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={this.props.image} size="small" />
            </Grid.Column>
            <Grid.Column width={6}>
              <h3>{upperName}</h3>
              <p>Style #: {this.props.styleNumber}</p>
              <p>Color: {this.props.color}</p>
              <br />
              <Grid.Row>

              <h5 style={editButtonStyle}>
              <EditItem
                item={this.props}
                price={price}
                shirtSize={this.state.shirtSize}
                updateShirtSize={this.updateShirtSize}
                quantity={this.props.quantity}
                updateQuantity={this.props.updateQuantity}
                />
              | X REMOVE | SAVE FOR LATER </h5>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2} textAlign="center">
              <h3>{this.state.shirtSize}</h3>
            </Grid.Column>
            <Grid.Column width={2} textAlign="center">
              <input
                maxLength="1"
                value={this.props.quantity}
                size="2"
                align="middle"
              />
            </Grid.Column>

            <Grid.Column width={3} textAlign="right">
              <h2>${this.state.price}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </div>
    );
  }
}
