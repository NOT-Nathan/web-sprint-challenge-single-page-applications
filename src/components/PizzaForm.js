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
            <div>
                <img src={pizzaImage} alt="Some Pizza"/>
                <form onSubmit={onSubmit}>
                    <div>{errors.name}</div>
                    <div>{errors.sizes}</div>
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
                            <option>Please Choose A Size</option>
                            <option>10-inch</option>
                            <option>12-inch</option>
                            <option>14-inch</option>
                            <option>16-inch</option>
                        </select>
                    </label>
                    <div>
                        <h3>Pizza Toppings</h3>
                        <label>
                            <input
                                value={values.pepperoni} 
                                type='checkbox'
                                name='pepperoni'
                                onChange={onChange}
                            />
                        Pepperoni</label>
                        <label>
                            <input
                                value={values.ham} 
                                type='checkbox'
                                name='ham'
                                onChange={onChange}
                            />
                        Ham</label>
                        <label>
                            <input
                                value={values.sausage} 
                                type='checkbox'
                                name='sausage'
                                onChange={onChange}
                            />
                        Sausage</label>
                        <label>
                            <input
                                value={values.bacon} 
                                type='checkbox'
                                name='bacon'
                                onChange={onChange}
                            />
                        Bacon</label>
                        <label>
                            <input
                                value={values.pineapple} 
                                type='checkbox'
                                name='pineapple'
                                onChange={onChange}
                            />
                        Pineapple</label>
                        <label>
                            <input
                                value={values.spinach} 
                                type='checkbox'
                                name='spinach'
                                onChange={onChange}
                            />
                        Spinach</label>
                        <label>
                            <input
                                value={values.chicken} 
                                type='checkbox'
                                name='chicken'
                                onChange={onChange}
                            />
                        Chicken</label>
                    </div>
                    <label>Special Instructions
                        <input 
                            value={values.special}
                            onChange={onChange}
                            type="text"
                            name="special"
                        />
                    </label>
                    <button disabled={disabled}>Order</button>
                </form>
            </div>
        </div>
    )
}

export default Form