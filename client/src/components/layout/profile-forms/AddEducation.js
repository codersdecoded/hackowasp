import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addEducation } from '../../../actions/profileaction'


const AddEducation = ({ addEducation, history }) => {


    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: '',
        description: '',
    });
    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        school,
        degree,
        fieldofstudy,
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
        addEducation(formData, history);
    }

    return (
        <div>
            <div className="container" id="CYP">
                <h2 className="purple-text" >Add Your Education</h2>
                <h5> <i className="material-icons" >school</i> Add any school, bootcamp, etc that you have attended</h5>
            </div>
            <br />
            <div className="section">
                <div className="container">
                    <span className="lead c2">* = required field</span>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="school" type="text" className="" name="school" value={school} onChange={e => handleChange(e)} required />
                            <label for="school">School/Bootcaamp</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m4 offset-m1 offset-l2 white-text">
                            <input id="deg" type="text" className="active" name="degree" value={degree} onChange={e => handleChange(e)} required />
                            <label for="deg">Degree/Certificate</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="fos" type="text" className="" name="fieldofstudy" value={fieldofstudy} onChange={e => handleChange(e)} />
                            <label for="fos">Field Of Study</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m3 l2 offset-l2">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" id="date" className="datepicker" name="from" value={from} onChange={e => handleChange(e)} />
                            <label for="date">From Date</label>
                        </div>
                        <div className="input-field col xs12 s12 m3 l2">
                            <i className="material-icons prefix">date_range</i>
                            <input type="text" id="date1" className="datepicker" name="to" value={to} onChange={e => handleChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                            <label for="date1">To Date</label>
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
                                <span id="hu">Current School/Bootcamp</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <textarea id="des" type="text" className="materialize-textarea" name="description" value={description} onChange={e => handleChange(e)}></textarea>
                            <label for="des">Program Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs6 s6 m4 offset-m1 offset-l2 white-text">
                            <button className="btn waves-effect waves-light purple darken-2" type="submit" name="action" >Submit
            <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col xs6 s6 m4 pull-m2">
                            <Link to="/dashboard" className="btn waves-effect white black-text" >
                                <i className="fas fa-arrow-left" ></i><span> Go Back</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default connect(null, { addEducation })(withRouter(AddEducation))
