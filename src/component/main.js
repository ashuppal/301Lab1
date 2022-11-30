import React from 'react'
import HornedBeast from './hornedBeast'
import beastArray from '../data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends React.Component {
  render () {
    return (
      <Container >
        <Row lg={5} xs={2} sm={3} md={4}>
          {beastArray.map(beast => (
            <Col key={beast._id}>
              <HornedBeast
                
                title={beast.title}
                imgUrl={beast.image_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Main

