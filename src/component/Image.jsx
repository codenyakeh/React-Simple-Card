import React from 'react'


function Image(props) {
  return (
    <div className='leftprofile'>
        <img src={props.src}/>
    </div>
  )
}

export default Image