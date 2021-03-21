import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './components/Homepage'
import Form from './components/PizzaForm'
import axios from 'axios'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: '',
  special: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {

const [ formValues, setFormValues ] = useState(initialFormValues)
const [ formErrors, setFormErrors ] = useState(initialFormErrors)
const [ pizza, setPizza ] = useState(initialPizzas)
const [ disabled, setDisabled ] = useState(disabled)
const [ post, setPost ] = useState([])

const formSubmit = e => {

}


  return (

    <Router>
    <Route exact path='/pizza'>
      <Form 
      disabled={disabled}
      submit={formSubmit} 
      />
    </Route>,
    <Route exact path='/'>
      <Home />
    </Route>
    </Router>

  );
};
export default App;
