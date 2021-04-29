import { Container } from '@material-ui/core';
import { Component } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import FormProductManager from './components/forms/FormProductManager';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">        
        <FormProductManager/>
      </Container>
    );
  }
}

export default App;
