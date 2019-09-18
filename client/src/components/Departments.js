import React from 'react';
import axios from "axios";
import { Card, Header, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Depts extends React.Component {
  state = { depts: [], };

  componentDidMount() {
    axios.get("/api/depts")
      .then( res => {
        this.setState({ depts: res.data, });
      })
  }

  renderProducts = () => {
    const { depts, } = this.state;

    if (depts.length <= 0)
      return <h2>No Depts</h2>
    return depts.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Depts</Header>
        <br />
        <Button as={Link} color="blue" to="departments/new">
          Add Department
        </Button>
        <br />
        <br />
        <Card.Group>
          { this.renderDepts() }
        </Card.Group>
      </div>
    )
  }
}

export default Depts;