import React from 'react'
import { a } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/authaction'
import slider1 from './images/slider1.jpg'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (

        <div>
            <li><div className="user-view">
                <div className="background">
                    <img src={slider1} className="responsive-img" />
                </div>
                <div className="exp"><i className="material-icons" id="person">person</i></div>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <ul className="collection" >
                <li className="collection-item">
                    <a href="/dashboard"><i className="material-icons circle blue white-text" id="face">face</i> Dashboard</a>
                </li>
                <li className="collection-item">
                    <a href="/profiles"><i className="material-icons circle blue white-text" id="face">people</i> Developers</a>
                </li>
                <li className="collection-item">
                    <a href='/posts'><i className="material-icons circle blue white-text" id="face">people</i>Posts</a>
                </li>
                <li className="collection-item">
                    <a href='#' onClick={logout} >Logout</a>
                </li>
            </ul>
        </div>

    );
    const guestLinks = (
        <div>
            <li><div className="user-view">
                <div className="background">
                    <img src={slider1} className="responsive-img" />
                </div>
                <div className="exp"><i className="material-icons" id="person">person</i></div>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <ul className="collection" >
                <li className="collection-item">
                    <a href="/register"><i className="material-icons circle blue white-text" id="face">face</i>Sign Up</a>
                </li>
                <li className="collection-item">
                    <a href="/login"><i className="material-icons circle blue white-text" id="face">people</i>Login</a>
                </li>
                <li className="collection-item">
                    <a href='/profiles'><i className="material-icons circle blue white-text" id="face">people</i>Developers</a>
                </li>
            </ul>

        </div>
    );



    return (

        <div>

            <nav className="nav-wrapper black white-text">

                <a href="/" className="brand-logo white-text" id="nav-logo"><i className="fas fa-code white-text"></i> Dev Connector</a>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large right white-text"><i className="material-icons">menu</i></a>
            </nav>
            <ul id="slide-out" className="sidenav">
                {!loading && (<div>{isAuthenticated ? (authLinks) : guestLinks}</div>)}
            </ul>
        </div>










        /* <nav classNameName="navbar bg-dark">
            <h1>
                <a href="/"><i classNameName="fas fa-code"></i> DevConnector</a>
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
