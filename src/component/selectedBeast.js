import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'


class  SelectedBeast extends React.Component {
  render(){
  return (
    <Modal show={this.props.showModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastSelected.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {this.props.beastSelected.description}
        <Image className="img-fluid" src={this.props.beastSelected.image_url} />
        </Modal.Body>

      </Modal.Dialog>
    </Modal>
  );
}}

export default SelectedBeast;