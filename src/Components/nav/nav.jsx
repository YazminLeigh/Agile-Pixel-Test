import React from "react"
import "./nav.css"

const NavComponent = () => {
    return (
            <div className="nav-container">
                <h1 className="nav">HEAR</h1>
                <h1 className="nav">LATEST</h1>
                <h1 className="nav">TOUR</h1>
                <h1 className="nav">SEE</h1>
                <h1 className="nav">SHOP</h1> 
                <h1 className="nav">WATCH</h1>
                <h1 className="nav">PERSONAL</h1>
                <h1 className="nav">AID</h1>
                {/* <h1>{nav.name.toUpperCase}</h1> */}
            </div>
    )
}

export default NavComponent