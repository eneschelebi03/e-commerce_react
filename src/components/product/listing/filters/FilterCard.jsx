import React from 'react'

const FilterCard = (props) => {
  return (
      <div >
          <h3>
              {props.heading}
          </h3>
          {props.children}
    </div>
  )
}

export default FilterCard