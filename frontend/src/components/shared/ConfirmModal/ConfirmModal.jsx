import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ConfirmModal({show, handleClose, title, body, data}) {
    return(
        <Modal show={show} onHide={() => handleClose(false, data)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {body ? <Modal.Body>{body}</Modal.Body> : null}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false, data)}>
            Nope
          </Button>
          <Button variant="primary" onClick={() => handleClose(true, data)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ConfirmModal;