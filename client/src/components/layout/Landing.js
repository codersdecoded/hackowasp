import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }


    return (
        <div>

            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="./images/slider1.jpg" />
                        <div className="caption center-align">
                            <h1>Creative</h1>

                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>

                            <a className=" white black-text waves-effect waves-light btn btn-large">GET STARTED</a>
                        </div>
                    </li>
                    <li>
                        <img src="./images/slider2.jpg" />
                        <div className="caption left-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            <a className=" white black-text waves-effect waves-light btn btn-large">GET STARTED</a>
                        </div>
                    </li>
                    <li>
                        <img src="./images/slider3.jpg" />
                        <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            <a className=" white black-text waves-effect waves-light btn btn-large">GET STARTED</a>
                        </div>
                    </li>
                </ul>
            </div>


            <div className="container">
                <div className="section">
                    <h1 className="center">Features</h1>

                    <div className="row">
                        <div className="col s12 m12 l4">
                            <div className="icon-block">
                                <h2 className="center light-black-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Speeds up development</h5>

                                <p className="light center">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                            </div>
                        </div>

                        <div className="col s12 m12 l4">
                            <div className="icon-block">
                                <h2 className="center light-black-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">User Experience Focused</h5>

                                <p className="light center">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                            </div>
                        </div>

                        <div className="col s12 m12 l4">
                            <div className="icon-block">
                                <h2 className="center light-black-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light center">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <br /><br />
            </div>




            <div className="container">
                <h3 className="center">Speak to the experts</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" />
                            <label for="icon_prefix">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate" />
                            <label for="icon_telephone">Telephone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Inter</option>
                                <option value="2">Graduate</option>
                                <option value="3">Post-Graduate</option>
                            </select>
                            <label>Qualification</label>
                        </div>
                        <div className="input-field col s6">
                            <select>
                                <option value="" selected>Choose your option</option>
                                <option value="1">GMAT</option>
                                <option value="2">GRE</option>
                                <option value="3">GATE</option>
                            </select>
                            <label>Exam interested in</label>
                        </div>

                    </div>
                    <button className="btn-large black white-text submit">SUBMIT</button>
                </form>
            </div>


            <br /><br /><br />



            <section className="section section-follow black darken-2 white-text">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            <h4>Follow COMPANYNAME</h4>
                            <p>Follow us on social media for special offers</p>
                            <a href="" className="white-text"><i className="fab fa-facebook fa-4x"></i></a>
                            <a href="" className="white-text"><i className="fab fa-pinterest fa-4x"></i></a>
                            <a href="" className="white-text"><i className="fab fa-twitter fa-4x"></i></a>
                            <a href="" className="white-text"><i className="fab fa-linkedin fa-4x"></i></a>
                            <a href="" className="white-text"><i className="fab fa-instagram fa-4x"></i></a>
                        </div>
                    </div>
                </div>
            </section>




            <footer className="page-footer black darken-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Company Bio</h5>
                            <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Settings</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Link 1</a></li>
                                <li><a className="white-text" href="#!">Link 2</a></li>
                                <li><a className="white-text" href="#!">Link 3</a></li>
                                <li><a className="white-text" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="#!">Link 1</a></li>
                                <li><a className="white-text" href="#!">Link 2</a></li>
                                <li><a className="white-text" href="#!">Link 3</a></li>
                                <li><a className="white-text" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Creative.inc</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authreducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(Landing);

