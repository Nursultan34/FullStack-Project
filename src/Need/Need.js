import React from 'react'

const Need = (props) => {
    document.title = 'Maltimat -' + props.title
  return (
    <div className='w-100'>{props.children}</div>
  )
}

export default Need