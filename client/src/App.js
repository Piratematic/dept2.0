import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home"; 
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from './components/Navbar';
import DepartmentsForm from './components/DepartmentsForm';
import Departments from './components/Departments.js';
import { Container } from 'semantic-ui-react';
import DepartmentView from './components/DepartmentView';

const App = () => (
  <>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
