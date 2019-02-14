import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

export default function InputFilter({filterOptions, searchTerm, onInputFilterChange}) {
  return (
    <Dropdown 
      text= {searchTerm ? searchTerm : 'Filter Terms'}
      icon='filter' 
      floating labeled button 
      className='icon'
    >
    <Dropdown.Menu>
      <Dropdown.Menu scrolling>
        {['--CLEAR FILTER--', ...filterOptions].map(option => 
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
