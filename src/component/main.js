import React from 'react';
import HornedBeast from './hornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import beastData from '../data.json';

class Main extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     beastData : beastData,
  //     filterData : beastData,

  //   }
  // }
  
  render () {
    return (
      <Container >
      <Form.Label> See animals by horns</Form.Label>
      <Form.Select onChange = {this.props.filteredHorns}>
      <option value = "">show every beast</option>
      <option value = "1">1 horned beast</option>
      <option value = "2">2 horned beast</option>
      <option value = "3">3 horned beast</option>
      <option value = "100">100 horned beast</option>
      </Form.Select>
        <Row lg={5} xs={2} sm={3} md={4}>
          {this.props.beastArray.map(beast => (
            <Col key={beast._id}>
              <HornedBeast
                beast={beast}
                selectTheBeast={this.props.selectTheBeast}
              />
            </Col>
          ))}
        </Row>
    
      </Container>
    )
  }
}

export default Main


