import React, { useState } from "react";
import {
  Modal,
  Button,
  ModalFooter,
  ModalBody,
  ModalTitle
} from "react-bootstrap";
import { render } from "@testing-library/react";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalTitle>Modal heading</ModalTitle>

        <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

render(<Example />);
