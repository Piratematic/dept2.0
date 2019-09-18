import React from 'react';
import { Link, } from 'react-router-dom';
import { Button, Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <div style={styles.container}>
    <Header as="h1" style={styles.header}>Welp that didn't work.</Header>
    <Header as="h3" style={styles.header}>Might aswell go back home I guess.</Header>
    <Link to="/">
      <Button color="blue">Home</Button>
    </Link>
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  header: {
    fontSize: "50px",
  },
};

export default NoMatch;