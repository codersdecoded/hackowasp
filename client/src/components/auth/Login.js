import React, { useState } from 'react';
import { login } from '../../actions/authaction'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password, } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        login({ email, password });
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
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }



    return (

        <div>

            <div className="center">
                <div className="container" id="SI">
                    <h2 className="purple-text" >Sign In</h2>
                    <h4> <i className="material-icons ep">person</i>Login to your account</h4>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <div className="col s12 l8 center offset-l2">
                            <form className="">
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input type="email" id="email" onChange={(e) => handleChange(e)} value={email} name="email" required />
                                    <label for="email">Your Email</label>
                                    <span >This site uses Gravatar so if you want a profile image, use a Gravatar email</span>
                                </div>
                                <div className="input-field">
                                    <i className="material-icons prefix">lock</i>
                                    <input type="password" id="pass" name="password"
                                        value={password}
                                        minLength="6"
                                        onChange={(e) => handleChange(e)} />
                                    <label for="pass">Password</label>
                                </div>
                                <button className="btn waves-effect waves-light purple darken-2" type="submit" name="action" >Login
         </button>
                            </form>
                            <span><h6>Don't have an account?<Link to="/register">Sign up</Link></h6></span>
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

export default connect(mapStateToProps, { login })(Login);
