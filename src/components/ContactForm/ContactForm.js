/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContactForm.scss';

export default class ContactForm extends Component {
  static propTypes = {
    setContacts: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  resetState() {
    this.setState({
      name: '',
      number: '',
    });
  }

  changeInput = e => {
    const { state } = this;
    const stateName = String(e.target.name).toLowerCase();

    if (state[stateName] === undefined)
      throw new Error(`No state ${stateName} in ContactForm`);

    this.setState({
      [stateName]: e.target.value,
    });
  };

  onSubmit = e => {
    const { name, number } = this.state;
    const { setContacts } = this.props;
    e.preventDefault();

    if (!name || !number) {
      return false;
    }

    setContacts(name, number);
    this.resetState();

    return true;
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div>
          <label>
            <div className="label">Name</div>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.changeInput}
            />
          </label>
          <label>
            <div className="label">Number</div>
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.changeInput}
            />
          </label>
        </div>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
