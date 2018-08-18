import React, { Component } from 'react'; 
import { Grid, Image, Divider } from 'semantic-ui-react'; 


 const ShoppingList = props => {
  console.log(props);
  
    return (
      <div>
        <Grid divided='vertically'>
        <Grid.Row columns={3}>
        <Grid.Column width={4}>
            <h1>Column 1</h1>
            <Image 
                src={props.image}
                size="small"
                />
            </Grid.Column>
        <Grid.Column width={9}>
            <h1>Column 2</h1>
        </Grid.Column>
        <Grid.Column width={3}>
        <h1>Column 3</h1>
        </Grid.Column>
        </Grid.Row>
    </Grid>
         <Divider />
      </div>
    )
  }

  export default ShoppingList; 
