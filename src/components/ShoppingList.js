import React, { Component } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import EditItem from "./EditItem";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shirtSize: "",
      price: "", 
      active: false, 
    };
    this.updateShirtSize = this.updateShirtSize.bind(this);
    this.handleOpen = this.handleOpen.bind(this); 
    this.multiFunction = this.multiFunction.bind(this); 
  }

  componentDidMount = () => {
      
      // randomly assign size value 
    const shirtSize = this.props.size[
      Math.floor(Math.random() * this.props.size.length)
    ];
    const price = (this.props.price * parseInt(this.props.quantity)).toFixed(2);
    console.log((price));

    this.setState({ shirtSize: shirtSize, price: price, active: false });
  };

  handleOpen = () => {
      console.log("active state", this.state.active);
      
      this.setState({ active: !this.state.active })
  }; 

  updateShirtSize = (e, { value }) => {
    this.setState({ shirtSize: value });
  };

  componentDidUpdate(prevProps) {
    // if quantity of item changes, update the displayed price     
    if ( this.props.quantity !== prevProps.quantity) {
        const updatedPrice = (this.props.price * this.props.quantity).toFixed(2);
        this.setState({ price: updatedPrice });    }
    };

    multiFunction = (e) => {
        console.log("inside multifunction", this.state.active);
        
        this.handleOpen(); 
        this.props.updateTotal(e); 
    }

  render() {
    // console.log("shoppinglist state", this.props);
    const editButtonStyle = { display: "flex", flexDirection: "row" };
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
                    shirtSize={this.state.shirtSize}
                    updateShirtSize={this.updateShirtSize}
                    updateQuantity={this.props.updateQuantity}
                    updateTotal={this.props.updateTotal}
                    modalOpen={this.state.active}
                    handleOpen={this.handleOpen}
                    multiFunction={this.multiFunction}
                  />
                  | X REMOVE | SAVE FOR LATER{" "}
                </h5>
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
