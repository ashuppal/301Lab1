import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clickCount: "❤️"
    }
  }

  handleClick =()=>{
    this.setState({
      clickCount: this.state.clickCount + "❤️"
    })
  }
  render () {
    return (
      <>
      <Card onClick={this.handleClick}>
        <Card.Title> {this.props.title} </Card.Title>
        <Card.Img src={this.props.imgUrl} />
        <Card.Body>{this.state.clickCount}</Card.Body>
      </Card>
     
      </>
    )
  }
}

export default HornedBeast;



