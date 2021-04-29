import { Container } from '@material-ui/core';
import { Component } from 'react';
import './App.css';
import FormProductManager from './components/forms/FormProductManager';
import FormProductList from './components/forms/FormProductList';
import '@fontsource/roboto';

class App extends Component {
  render(){
    return (
      <Container maxWidth="lg">
        <Container component="article" maxWidth="sm">              
          <FormProductManager/>
        </Container>

        <FormProductList/>      
      </Container>
    );
  }
}

export default App;
