import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LoginModal = (props) => {


    const navigate = useNavigate();
    let handleModalButton = ()=>{
        props.onHide()
        navigate('/login')
    }
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Vous étes inscrit
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button  onClick={handleModalButton}>Se connecter</Button>
        </Modal.Footer>
        
      </Modal>
    );
  }
  export default LoginModal;