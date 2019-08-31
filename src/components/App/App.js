import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Header from '../Header';
import Router from '../Router';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Layout header={Header}>
          <Router />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
