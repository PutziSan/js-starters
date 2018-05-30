import { CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import JssAppProvider from './JssAppProvider';

const Fancy = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
`;

const Headline = styled(Typography)`
  color: black;
  font-size: 24rem;
  margin: auto;
`;

const App = () => (
  <JssAppProvider>
    <CssBaseline />

    <Typography />

    <Headline />

    <Fancy>
      <Headline variant="headline">42</Headline>
    </Fancy>
  </JssAppProvider>
);

export default App;
