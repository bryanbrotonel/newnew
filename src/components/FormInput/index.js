import React from "react";

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputID: this.props.inputID,
      inputPlaceholder: this.props.inputPlaceholder
    }
  }

  render() {
    const {inputID, inputPlaceholder} = this.state;

    return (
      <div className="form-group">
        <input type="text" className="form-control" id={`${inputID}`} placeholder={`${inputPlaceholder}`}/>
      </div>
    )
  }
}
