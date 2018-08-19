import React, { Component } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import EditItem from "./EditItem";

export default class ShoppingList extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
     }
   }
   
   
    
    render(){
        const upperName = `${this.props.name}`.toUpperCase();
        const shirtSize = this.props.size[Math.floor(Math.random() * this.props.size.length)];
        const price = this.props.price.toFixed(2);
      //   const totalItems = props.length;
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
                <br/>
                <EditItem /> <h4>| X REMOVE | SAVE FOR LATER </h4>
                
              </Grid.Column>
              <Grid.Column width={2} textAlign="center">
                <h3>{shirtSize}</h3>
              </Grid.Column>
              <Grid.Column width={2} textAlign="center">
                <input maxLength="1" defaultValue="1" size="2" align="middle" />
              </Grid.Column>
    
              <Grid.Column width={3} textAlign="right">
                <h2>${price}</h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
        </div>
      );
    };
}; 
  
