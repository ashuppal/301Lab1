import React from "react";

class HornedBeast extends React.Component{
  render(){
    return <><h2>{this.props.title} {this.props.description} {this.props.img}
    </h2>
    <img src={this.props.imgUrl} />
    </> 
  }
}

export default HornedBeast;