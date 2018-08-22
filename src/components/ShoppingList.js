import React, { Component } from "react";
import { Grid, Image, Divider , DropdownDivider} from "semantic-ui-react";
import EditItem from "./EditItem";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shirtSize: "",
      price: "",
      active: false, 
      shirtColor: this.props.color, 
      shirtImage: this.props.image, 
    };
    this.updateShirtSize = this.updateShirtSize.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.multiFunction = this.multiFunction.bind(this);
    this.updateQuantity = this.updateColor.bind(this); 
  }

  componentDidMount = () => {
    // randomly assign size value
    const shirtSize = this.props.size[
      Math.floor(Math.random() * this.props.size.length)
    ];
    const price = (this.props.price * parseInt(this.props.quantity)).toFixed(2);
    this.setState({ shirtSize: shirtSize, price: price, active: false });
  };

  updateColor = (color) => {
      console.log("click", color);
      
    this.setState({shirtColor: color.hue, shirtImage: color.src})
  }

  handleOpen = () => {
    this.setState({ active: !this.state.active });
  };

  updateShirtSize = (e, { value }) => {
    this.setState({ shirtSize: value });
  };

  componentDidUpdate(prevProps) {
    // if quantity of item changes, update the displayed price
    if (this.props.quantity !== prevProps.quantity) {
      const updatedPrice = (this.props.price * this.props.quantity).toFixed(2);
      this.setState({ price: updatedPrice });
    }
  }

  multiFunction = e => {
    // onSubmit triggers an update to modal state in ShopingList and updateQuanity in Cart
    // passing modal open/close props from parents forced wrong data into modal
    // moving modal open/close props to direct parent solved it
    this.handleOpen();
    this.props.updateTotal(e);
  };

  render() {
        // console.log("shoppinglist state", this.props);
    const editButtonStyle = { 
        display: "flex", 
        flexDirection: "row", 
        flex: 1, 
        alignItems: "baseline"
    };
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
              <div style={editButtonStyle}>
              {/* <Grid.Row > */}
                  <div>
                      <EditItem
                    item={this.props}
                    shirtImage={this.state.shirtImage}
                    shirtColor={this.state.shirtColor}
                    shirtSize={this.state.shirtSize}
                    updateShirtSize={this.updateShirtSize}
                    updateQuantity={this.props.updateQuantity}
                    updateTotal={this.props.updateTotal}
                    modalOpen={this.state.active}
                    handleOpen={this.handleOpen}
                    multiFunction={this.multiFunction}
                    updateColor={this.updateColor}
                    />
                    </div>
                  <h5
                    onClick={() =>
                        this.props.removeItem(this.props.styleNumber)
                    }
                    >
                    | X REMOVE
                  </h5>
                  <h5>| SAVE FOR LATER</h5>{" "}
              {/* </Grid.Row> */}
                    </div>
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
