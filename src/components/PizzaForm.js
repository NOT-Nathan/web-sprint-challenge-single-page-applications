import React from 'react'
import {Link} from 'react-router-dom'
import pizzaImage from './Pizza.jpg'

function Form(props) {
    

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
                <form>
                    <label>Full name
                        <input 
                            type="text"
                        /> 
                    </label>
                    <label>Pizza Size
                        <select name="sizes">
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
                                type='checkbox'
                            />
                        </label>
                    </div>
                    <label>Special Instructions
                        <input 
                            type="text"
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </body>
        </div>
    )
}

export default Form