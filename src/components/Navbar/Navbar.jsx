import React , {Component} from "react";
import {NavLink} from "react-router-dom" ;
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
export default class Navbar extends Component {
    render ()
    {
        return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-info" href="#">CODE WITH YD</a>
                    <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                        {/* {this.state.show ? <MenuIcon /> : <CloseIcon />} */}
                    </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-light" to="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" to="/movie">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" to="/tv">Tv</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}
 


 