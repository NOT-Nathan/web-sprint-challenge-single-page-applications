import React from 'react'
import {Link} from 'react-router-dom'
import pizzaImage from './Pizza.jpg'

function Form(props) {

    const {
        disabled,
        submit,
        errors,
        values,
        change,
    } = props

    const onSubmit = e => {
        e.preventDefault();
        submit()
    }

    const onChange = e => {
        const { name, value, checked, type} = e.target
        const val = type === 'checkbox' ? checked : value
        change(name, val)
    }

    return(
        <div>
            <header>
                <h1>Pizza</h1>
                <nav>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                </nav>
            </header>
            <body>
                <img src={pizzaImage} alt="Some Pizza"/>
                <form onSubmit={onSubmit}>
                    <div>{errors.name}</div>
                    <div>{errors.sizes}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.special}</div>
                    <label>Full name
                        <input 
                            value={values.name}
                            type="text"
                            onChange={onChange}
                            name="name"
                        /> 
                    </label>
                    <label>Pizza Size
                        <select 
                        value={values.sizes} 
                        onChange={onChange}
                        name="sizes">
                            <option>10-inch</option>
                            <option>12-inch</option>
                            <option>14-inch</option>
                            <option>16-inch</option>
                        </select>
                    </label>
                    <div>
                        <h3>Pizza Toppings</h3>
                        <label>Pepperoni
                            <input
                                value={values.toppings} 
                                type='checkbox'
                                name='toppings'
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <label>Special Instructions
                        <input 
                            value={values.special}
                            onChange={onChange}
                            type="text"
                            name="special"
                        />
                    </label>
                    <button disabled={disabled}>Submit</button>
                </form>
            </body>
        </div>
    )
}

export default Form