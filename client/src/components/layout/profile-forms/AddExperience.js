import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addExperience } from '../../../actions/profileaction'


const AddExperience = ({ addExperience, history }) => {


    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: '',
        description: '',
    });
    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addExperience(formData, history);
    }

    return (
        <div>

            <div className="container" id="CYP">
                <h2 className="purple-text" >Add an Experience</h2>
                <h5> <i className="fas fa-code-branch" ></i>Add any developer/programming positions that you have had in the past</h5>
            </div>
            <br />
            <div className="section">
                <div className="container">
                    <span className="lead c2">* = required field</span>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="job" type="text" className="" name="title" value={title} onChange={e => handleChange(e)} required />
                            <label for="job">Job Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m4 offset-m1 offset-l2 white-text">
                            <input id="company" type="text" className="active" name="company" value={company} onChange={e => handleChange(e)} required />
                            <label for="company">Company</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="location" type="text" className="" name="location" value={location} onChange={e => handleChange(e)} />
                            <label for="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m3 l2 offset-l2">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" id="date1" className="datepicker" name="from" value={from} onChange={e => handleChange(e)} />
                            <label for="date1">From Date</label>
                        </div>
                        <div className="input-field col xs12 s12 m3 l2">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" id="date" className="datepicker" name="to" value={to} onChange={e => handleChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                            <label for="date">To Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2">
                            <label>
                                <input type="checkbox" name="current" value=""
                                    checked={current}

                                    onChange={e => {
                                        setFormData({ ...formData, current: !current });
                                        toggleDisabled(!toDateDisabled);
                                    }} />
                                <span id="sif">Current Job</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <textarea id="bio" type="text" className="materialize-textarea" name="description" value={description} onChange={e => handleChange(e)}></textarea>
                            <label for="bio">Job Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs6 s6 m4 offset-m1 offset-l2 white-text">
                            <button className="btn waves-effect waves-light purple darken-2" type="submit" name="action" >Submit
            <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col xs6 s6 m4 pull-m2">
                            <Link className="btn waves-effect white black-text" to="/dashboard">
                                <i className="fas fa-arrow-left" ></i><span> Go Back</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>




        </div>
    )
}



export default connect(null, { addExperience })(withRouter(AddExperience))
