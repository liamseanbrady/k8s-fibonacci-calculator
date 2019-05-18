import React, { Component } from 'react';
import 'components/App.css'
import { connect } from 'react-redux'

import { fetchValues, fetchIndexes, addIndex } from 'actions'

class Fib extends Component {
  state = {
    index: ''
  };

  componentDidMount() {
    this.props.fetchValues();
    this.props.fetchIndexes();
  }

  componentDidUpdate(prevProps) {
    if (this.props.indexes.length !== prevProps.indexes.length) {
      this.props.fetchValues();
      this.props.fetchIndexes();
    }
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    this.props.addIndex(this.state.index)
    this.setState({ index: '' })
  }

  onInputChange = (event) => {
    this.setState({ index: event.target.value })
  }


  renderSeenIndexes() {
    return this.props.indexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    return (
      Object.keys(this.props.values).map(index =>
        <div key={index}>For index {index} I calculated {this.props.values[index]}</div>
      )
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Enter your index:</label>
          <input onChange={this.onInputChange} value={this.state.index} />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        { this.renderSeenIndexes() }

        <h3>Calulcated values:</h3>
        { this.renderValues() }
      </div>
    )
  }
}

const mapStateToProps = ({ values, indexes }) => ({
  values,
  indexes
})

const mapDispatchToProps = {
  fetchValues,
  fetchIndexes,
  addIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(Fib);
