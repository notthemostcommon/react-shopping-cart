import React from "react";
import { Modal, Button, Image, Grid, Dropdown, Form } from "semantic-ui-react";

const EditItem = props => {
    // console.log("editItem props", props.item);
  const sizingStyle = { display: "inline-block" };
  const inputStyle = { height: "40px", textAlign: "center" };
  const options = [
    { key: 1, text: "Small", value: "Small" },
    { key: 2, text: "Medium", value: "Medium" },
    { key: 3, text: "Large", value: "Large" },
    { key: 4, text: "X-Large", value: "X-Large" }
  ];
  return (
    <Modal 
    trigger={<h5 onClick={props.handleOpen}> EDIT </h5>} 
    open={props.modalOpen}
    // onClose={props.updateTotal}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center" width={8}>
            <h3>{`${props.item.name}`.toUpperCase()}</h3>
            <h2>${props.item.price}</h2>
            <br />
            <h4>{props.item.styleNumber}</h4>
            {props.item.colorOptions.map((color, i) => {
              const swatchStyle = {
                background: `${color}`,
                borderColor: "black",
                borderWidth: "5px",
                width: "35px",
                height: "25px",
                display: "inline-block"
              };
              return <div style={swatchStyle} key={i} />;
            })}
            <h4>Color: {props.item.color}</h4>

            <div style={sizingStyle}>
              <Dropdown
                selection
                options={options}
                // placeholder={props.shirtSize}
                onChange={props.updateShirtSize}
                value={props.shirtSize}
              />
              <Form onSubmit={props.multiFunction}>
                <input // quanity update input field
                  maxLength="1"
                  defaultValue={props.item.quantity}
                  size="2"
                  align="middle"
                  style={inputStyle}
                  onBlur={props.updateQuantity( props.item.styleNumber)}
                />
                <br />
                <Button type="submit">EDIT</Button>
              </Form>
            </div>

            {/* <Button primary>EDIT</Button>
            <p><a href="#">Check product details</a></p> */}
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={props.item.image} size="medium" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal>
  );
};

export default EditItem;
