import * as yup from 'yup'

export const pizzaSchema = yup.object().shape({
    name: yup
    .string()
    .required('A Username is required.')
    .min(3, "Username should be at least 3 characters long."),
    sizes: yup
    .string()
    .required('Please choose a size of pizza.'),
    pepperoni:  yup
    .boolean(),
    ham: yup
    .boolean(),
    sausage:  yup
    .boolean(),
    bacon:  yup
    .boolean(),
    pineapple:  yup
    .boolean(),
    spinach:  yup
    .boolean(),
    chicken:  yup
    .boolean(),
    special: yup
    .string()
})