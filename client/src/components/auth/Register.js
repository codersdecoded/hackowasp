import React, { useState } from 'react';
// import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { connect } from 'react-redux'
import { register } from '../../actions/authaction'


const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('passwords not match', 'danger', 5000);
        }
        else {
            console.log(formData);
            register({ name, email, password })

            //this is the code to register via axios not redux thus not needed
            // const newUser = { name: name, email: email, password: password }
            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json',
            //         }
            //     }
            //     const body = JSON.stringify(newUser);
            //     const res = await axios.post('/api/users', body, config);
            //     console.log(res.data);
            // } catch (error) {
            //     console.log(error.response)
            // }

        }
    }

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }



    return (

        <div>



            <div className="center">
                <div className="" id="SI">
                    <h2 className="purple-text" >Sign Up</h2>
                    <h4> <i className="material-icons ep" >person</i>Login to your account</h4>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <div className="col s6 l6 offset-l3">
                            <div className="input-field">
                                <input type="text" id="fname" name="name" value={name} required onChange={(e) => handleChange(e)} />
                                <label for="fname">Your  Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 l6 offset-l3">
                            <form className="">
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input type="email" id="email" onChange={(e) => handleChange(e)} value={email} name="email" required />
                                    <label for="email">Your Email</label>
                                    <span >This site uses Gravatar so if you want a profile image, use a Gravatar email</span>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="pass" name="password"
                                        value={password}
                                        minLength="6"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <label for="pass">Password</label>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="cpass" value={password2}

                                        name="password2"
                                        minLength="6"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <label for="cpass">Confirm Password</label>
                                </div>
                                <button className="btn waves-effect waves-light purple darken-2" type="submit" name="action" >Register
          </button>
                            </form>
                            <span><h6>Already have an account? <Link to="/login">Sign In</Link></h6></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )



}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authreducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { setAlert, register })(Register);
