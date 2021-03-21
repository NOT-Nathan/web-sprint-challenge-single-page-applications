import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Homepage'
import Form from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup';
import { pizzaSchema } from './components/validation/Schema'

const initialFormValues = {
  name: '',
  sizes: '',
  toppings: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  sizes: '',
  toppings: '',
  special: '',
}

const initialDisabled = true

const App = () => {

const [ formValues, setFormValues ] = useState(initialFormValues);
const [ formErrors, setFormErrors ] = useState(initialFormErrors);
const [ disabled, setDisabled ] = useState(initialDisabled);
const [ post, setPost ] = useState();

const formSubmit = e => {
  console.log('Submitted')
  axios
  .post("https://reqres.in/api/users", formValues)
  .then((res) => {
    setPost(res.data)
    console.log("Firing", res.data)
    setFormValues(initialFormValues)
  })
  .catch((err) => {
    console.log(err)
  })
}

const inputChange = (name, value) => {
  yup.reach(pizzaSchema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(({errors}) => setFormErrors({...errors, [name]: formErrors[0]}))


  setFormValues({
  ...formValues,
  [name]: value
})
}

useEffect(() => {
  pizzaSchema.isValid(formValues)
  .then(valid => setDisabled(!valid))
}, [formValues])
  return (
<div>
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
    </div>
  );
};
export default App;
