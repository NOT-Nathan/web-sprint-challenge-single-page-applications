import React from 'react'
import { Link } from 'react-router-dom'
function Home() {



    return(
        <div>
        <header>
            <h1>Home</h1>
        </header>
        <div>
            <Link to="/pizza">
                <button>Pizza?</button>
            </Link>
        </div> 
        </div>

    )
}

export default Home