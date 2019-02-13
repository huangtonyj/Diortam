import React from 'react'

export default function SearchBox({searchTerm, onSearchInputChange}) {
  return (
    <div className="ui icon input">
      <input 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchInputChange(e)}/>
      <i className="search icon"></i>
    </div>
  )
}
