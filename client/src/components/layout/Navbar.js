import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authaction'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (

        <div>
            <li><div className="user-view">
                <div className="background">
                    <img src="" />
                </div>
                <div className="exp"><i className="material-icons" id="person">person</i></div>
                <Link href="#name"><span className="white-text name">John Doe</span></Link>
                <Link href="#email"><span className="white-text email">jdandturk@gmail.com</span></Link>
            </div></li>
            <ul className="collection" >
                <li className="collection-item">
                    <Link to="/dashboard"><i className="material-icons circle blue white-text" id="face">face</i> Dashboard</Link>
                </li>
                <li className="collection-item">
                    <Link to="/profiles"><i className="material-icons circle blue white-text" id="face">people</i> Developers</Link>
                </li>
                <li className="collection-item">
                    <Link to='/posts'><i className="material-icons circle blue white-text" id="face">people</i>Posts</Link>
                </li>
                <li className="collection-item">
                    <Link to='#' onClick={logout} >Logout</Link>
                </li>
            </ul>
        </div>

    );
    const guestLinks = (
        <div>
            <ul className="collection" >
                <li className="collection-item">
                    <Link to="/dashboard"><i className="material-icons circle blue white-text" id="face">face</i> Dashboard</Link>
                </li>
                <li className="collection-item">
                    <Link to="/profiles"><i className="material-icons circle blue white-text" id="face">people</i> Developers</Link>
                </li>
                <li className="collection-item">
                    <Link to='/posts'><i className="material-icons circle blue white-text" id="face">people</i>Posts</Link>
                </li>
                <li className="collection-item">
                    <Link to='#' onClick={logout} >Logout</Link>
                </li>
            </ul>

        </div>
    );



    return (

        <div>

            <nav className="nav-wrapper white">

                <Link to="/" className="brand-logo" id="nav-logo"><i className="fas fa-code"></i> Dev Connector</Link>
                <Link to="#" data-target="slide-out" className="sidenav-trigger show-on-large right"><i className="material-icons">menu</i></Link>
            </nav>
            <ul id="slide-out" className="sidenav">
                {!loading && (<div>{isAuthenticated ? (authLinks) : guestLinks}</div>)}
            </ul>
        </div>










        /* <nav classNameName="navbar bg-dark">
            <h1>
                <Link to="/"><i classNameName="fas fa-code"></i> DevConnector</Link>
            </h1>
            {!loading && (<div>{isAuthenticated ? authLinks : guestLinks}</div>)}
        </nav> */

    )
}
const mapStateToProps = state => {
    return {
        auth: state.authreducer
    }
}

export default connect(mapStateToProps, { logout })(Navbar);
