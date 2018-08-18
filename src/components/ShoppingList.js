import React, { Component } from 'react'; 
import { Grid, Image, Divider } from 'semantic-ui-react'; 


 const ShoppingList = props => {
  const upperName = `${props.name}`.toUpperCase(); 
  const shirtSize = props.size[Math.floor(Math.random() * props.size.length)]
  const price = props.price.toFixed(2); 
  const style = {
      textAlign: "right",}
  console.log(price);
  
  
//   
  
    return (
      <div>
        <Grid divided='vertically'>
        <Grid.Row columns={3}>
        <Grid.Column width={3}>
            <Image 
                src={props.image}
                size="small"
                />
            </Grid.Column>
        <Grid.Column width={6}>
            <h3>{upperName}</h3>
            <p>Style #: {props.styleNumber}</p>
            <p>Color: {props.color}</p>
        </Grid.Column>
        <Grid.Column width={2}>
        <h3>{shirtSize}</h3>
        </Grid.Column>
    <Grid.Column width={2}>
        <input 
            maxlength="1" 
            defaultValue="1"
            size="2"
            align="middle"
            />


        </Grid.Column>
    
        <Grid.Column width={3} >
        <h2 style={style}>${price}</h2>
        </Grid.Column>
        </Grid.Row>
    </Grid>
         <Divider />
      </div>
    )
  }

  export default ShoppingList; 
