import React, { Component } from 'react';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/location/${this.state.query}`)
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="venueCity" onChange={this.handleChange} value={this.state.query} placeholder="search for location" />
        <input type="submit" value="GO!" />
      </form>
    );
  }
}