import * as yup from 'yup'

export const pizzaSchema = yup.object().shape({
    name: yup
    .string()
    .required('A Username is required.')
    .min(3, "Username should be at least 3 characters long."),
    sizes: yup
    .string()
    .required('Please choose a size of pizza.'),
    topings: yup
    .boolean()
    .oneOf([true], "Please choose at least one topping.")
})