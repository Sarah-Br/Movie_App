import React, { Component } from "react";


class addMovie extends Component {
  state = {
    isRating: "",
    srcImage: "",
    altImage: "",
    title: "",
    year: ""
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title:"
              onChange={event => this.setState({ title: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="year:"
              onChange={event => this.setState({ year: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="insert image: "
              onChange={event =>
                this.setState({ srcImage: event.target.value })
              }
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.addNewmovie(this.state)}
          >
            Add Movie
          </button>
        </form>
      </div>
    );
  }
}
export default addMovie;
