import React from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";

const EditItem = (props) => {
    // console.log(props);
    
  return (
    <Modal trigger={<h4>EDIT</h4>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default EditItem; 