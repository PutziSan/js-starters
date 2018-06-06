import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Favorite } from '@material-ui/icons';
import * as React from 'react';
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
  margin: auto 8px;
  
  @media (max-width: 600px) {
    font-size: 8rem;
  }
`;

const BigHeart = styled(Favorite)`
  color: rgb(255, 0, 0);
  font-size: 24rem;
  margin: auto 8px;
  
  @media (max-width: 600px) {
    font-size: 8rem;
  }
`;

const App = () => (
  <JssAppProvider>
    <CssBaseline />

    <Fancy>
      <div style={{ margin: 'auto', display: 'flex' }}>
        <Headline>#</Headline>
        <BigHeart />
      </div>
    </Fancy>
  </JssAppProvider>
);

export default App;
