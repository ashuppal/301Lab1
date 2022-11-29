import React from 'react'
import HornedBeast from './hornedBeast'
import unicornimage from '../images/unicorn.jpeg'



class Main extends React.Component {
  render () {
    return (
      <>
        <HornedBeast
          title='UniWhal : '
          description='A unicorn and a narwhal nuzzling their horns'
          // img={unicornimage}

        />

        <HornedBeast
          title='Rhino Family : '
          description='Parent rhino with two babies'
        />
      </>
    )
  }
}

export default Main
