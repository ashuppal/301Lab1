import React from 'react'
import Main from './component/main'
import Header from './component/header'
import Footer from './component/footer'
import SelectedBeast from './component/selectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css'
import beastData from './data.json'
import HornedBeast from './component/hornedBeast'

import { Container } from 'react-bootstrap'



class App extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      allBeast : beastData,
      beastSelected: {},
      showSelectedBeast : false,
    }
   }

   selectTheBeast = (theBeast) =>{
    this.setState({beastSelected: theBeast, showSelectedBeast: true})
   }

   hideModal = ()=>{
    this.setState({showSelectedBeast: false});
   }

  render(){
    return (
    <>
    <Container>
      <Header />
      <Main 
        beastArray = {this.state.allBeast} 
        selectTheBeast = {this.selectTheBeast} 
        />
      <SelectedBeast 
        hideModal = {this.hideModal} 
        showModal = {this.state.showSelectedBeast} 
        beastSelected = {this.state.beastSelected}

        // beasts = {this.state.selectTheBeast}
      />
      <Footer />
      </Container>
    </>
    )
  }
}

export default App;
