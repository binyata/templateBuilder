import React from 'react'
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

// Use this if you want to have this over other components
const Layer = ({ children }) => {
  return (
    <Container>
      {children}
      <Divider />
      <h3>Layer Comp.</h3>
    </Container>
  );
};
// <Link to="/">
//   <Header as="h1" className={h1}>
//     Table Of Contents
//   </Header>
// </Link>

export default Layer
