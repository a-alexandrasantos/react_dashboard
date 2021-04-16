import React, {Component} from "react";

class MenuPrincipal extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Home</a>

                <button className="navbar-toggle" type="button" data-toggle="collapse">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                    </ul>
                </div>
            </nav>
        )
    }
}

export default MenuPrincipal;