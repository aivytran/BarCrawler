import React from 'react';
import ModalStyle from '../session_form/modal_style';

class ErrorModal extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
		    modalOpen: true
      };
		this.closeModal = this.closeModal.bind(this);
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  render() {
    return (
      <div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          id="error-modal">
          <p>{this.props.message}</p>
        </Modal>
      </div>
    )
  }


}

export default ErrorModal
