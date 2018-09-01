import React from "react";

export default class FormInput extends React.Component {
  render() {
    const { inputID, inputPlaceholder, onChange, value } = this.props;

    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id={`${inputID}`}
          placeholder={`${inputPlaceholder}`}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  }
}
