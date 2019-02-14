import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

export default function InputFilter({filterOptions, searchTerm, onInputFilterChange}) {
  const tagOptions = [
    {
      text: 'Important',
      value: 'Important',
      label: { color: 'red', empty: true, circular: true },
    },
  ]
  return (
    // <div className="ui icon input">
    //   <input 
    //     type="text" 
    //     placeholder="Search..."
    //     value={searchTerm}
    //     onChange={(e) => onSearchInputChange(e)}/>
    //   <i className="search icon"></i>
    // </div>

    <Dropdown 
      text= {searchTerm ? searchTerm : 'Filter Terms'}
      icon='filter' 
      floating labeled button 
      className='icon'
    >
    <Dropdown.Menu>
      <Input 
        icon='search' 
        iconPosition='left' 
        className='search' 
      />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {filterOptions.map(option => 
          <Dropdown.Item 
            key={option} 
            value={option}
            text={option}
            onClick={() => onInputFilterChange(option)}
          />
        )}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
  )
}
