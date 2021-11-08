import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import BodyComponent from "./body-component/body.component";

const MainContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <BodyComponent />
      </Container>
    </React.Fragment>
  );
}

export default MainContainer