import React, { Component } from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'

export default class SimplyCard extends Component {
  render() {
    return (
      <div className='card'>
          <Image src={require("./pppp.jpeg")}/>
          <Title  text="Barcelona"/>
          <Description text="Best Team In The World"/>
      </div>
    )
  }
}

