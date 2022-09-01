import React from 'react'

class SearchBox extends Component {

  render() {
    return (
      <input 
        type="search" 
        // className="search-box" 
        placeholder="search monsters" 
        onChange={onSearchChange}/>
    )
  }
}

export default SearchBox;