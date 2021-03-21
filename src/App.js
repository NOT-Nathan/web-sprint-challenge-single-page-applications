import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './components/Homepage'
import Form from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  sizes: '',
  pepperoni: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  sizes: '',
  pepperoni: '',
  special: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {

const [ formValues, setFormValues ] = useState(initialFormValues)
const [ formErrors, setFormErrors ] = useState(initialFormErrors)
const [ pizza, setPizza ] = useState(initialPizzas)
const [ disabled, setDisabled ] = useState(initialDisabled)
const [ post, setPost ] = useState([])

const formSubmit = e => {
  axios
  .post("https://reqres.in/")
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

const inputChange = (name, value) => {
  setFormValues({
  ...formValues,
  [name]: value
})
}


  return (

    <Router>
    <Route exact path='/pizza'>
      <Form 
      disabled={disabled}
      submit={formSubmit} 
      change={inputChange}
      values={formValues}
      errors={formErrors}
      />
    </Route>,
    <Route exact path='/'>
      <Home />
    </Route>
    </Router>

  );
};
export default App;
