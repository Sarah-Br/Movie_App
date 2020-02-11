import React from "react";

import { Modal, Button } from "antd";

class TheModal extends React.Component {
  state = {
    visible: false,
    isRating: "",
    srcImage: "",
    altImage: "",
    title: "",
    year: ""
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
    this.props.addNewmovie(this.state);
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });

    
  };

  render() {
    return (
      <div>
        <Button
          style={{ fontSize: "x-large", fontFamily: "Sofia", opacity: "0.8" }}
          onClick={this.showModal}
        >
          Add Movie here
        </Button>
        <Modal
          style={{ fontFamily: "sofia" }}
          title="What's Your Favorite?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={event => this.setState({ title: event.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                onChange={event => this.setState({ year: event.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Insert image"
                onChange={event =>
                  this.setState({ srcImage: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                max="5"
                min="1"
                type="number"
                className="form-control"
                placeholder="Rate"
                onChange={event =>
                  this.setState({ isRating: event.target.value })
                }
              />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default TheModal;
