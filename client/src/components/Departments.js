import React from 'react';
import axios from "axios";
import { Card, Header, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Contend extra>
          <Button as={Link} to={`/departments/${department.id}`} color="green">
            View
          </Button>
        </Card.Contend>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Button as={Link} color="blue" to="departments/new">
          Add Department
        </Button>
        <br />
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

export default Departments;