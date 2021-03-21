import React from 'react'
import { Link } from 'react-router-dom'
function Home() {



    return(
        <div>

        <header>
        <h1>Home</h1>
        </header>
        <body>
            <Link to="/pizza">
                <button>Pizza Time!</button>
            </Link>
        </body>
        
        </div>

    )
}

export default Home