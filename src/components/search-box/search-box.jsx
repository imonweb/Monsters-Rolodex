import React from 'react'
import { Component } from 'react';

class SearchBox extends Component {

  render() {
    return (
      <input 
        type="search" 
        className={this.props.className} 
        placeholder="search monsters" 
        onChange={this.props.onChangeHandler}/>
    )
  }
}

export default SearchBox;