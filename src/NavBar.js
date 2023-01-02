import React from 'react'
import {Link} from "react-router-dom";


function NavBar() {
  return (
    <div>
        <center>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/create">Create Student</Link>
            </div>
        </center>
    </div>
  )
}

export default NavBar