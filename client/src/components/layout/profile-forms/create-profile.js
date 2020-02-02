import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createProfile } from '../../../actions/profileaction'


const CreateProfile = ({ createProfile, history }) => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    });
    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        createProfile(formData, history);
    }

    return (
        <div>


            <div className="container" id="CYP">
                <h2 className="purple-text ">Create Your Profile</h2>
                <h4> <i className="material-icons ep">person</i>Let's get some information to make your profile stand out</h4>
            </div>
            <br />
            <div className="section">
                <div className="container">
                    <span className="lead c2">* = required field</span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <select className="options" name="status" value={status} onChange={(e) => handleChange(e)}><br />
                                <option value="" disabled selected>*Select Professional Status</option>
                                <option value="1" className="">Developer</option>
                                <option value="2">Junior Developer</option>
                                <option value="3">Senior Developer</option>
                                <option value="4">Manager</option>
                                <option value="5">Student or Learning</option>
                                <option value="6">Instructor or Teacher</option>
                                <option value="3">Intern</option>
                                <option value="3">Other</option>
                            </select>
                            <small>Give us an idea of where you are at in your career</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="company" type="text" className="" name="company" value={company} onChange={(e) => handleChange(e)} />
                            <label for="company">Company / Institute</label>
                            <small>Could be your own company or one you work for</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="website" type="text" className="" name="website" value={website} onChange={(e) => handleChange(e)} />
                            <label for="website">Website</label>
                            <small>Could be your own or a company website</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <input id="location" type="text" className="" name="location" value={location} onChange={(e) => handleChange(e)}
                            />
                            <label for="location">Location</label>
                            <small>City & state suggested (eg. Boston, MA)</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6 offset-m1 offset-l2 white-text"><br />
                            <input id="skills" type="text" className="Skills" name="skills" value={skills} onChange={(e) =>
                                handleChange(e)} />
                            <label for="skills">* Skills</label>
                            <small>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m6 offset-m1 offset-l2 white-text">
                            <input id="gitname" type="text" className="" name="githubusername" value={githubusername} onChange={(e) =>
                                handleChange(e)}
                            />
                            <label for="gitname">Github Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <textarea placeholder="A short bio of yourself" id="bio" type="text" className="materialize-textarea" name="bio"
                                value={bio} onChange={(e) => handleChange(e)}></textarea>
                            <label for="bio">Tell us a little about yourself</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 white-text">
                            <button onClick={(e) => toggleSocialInputs(!displaySocialInputs)} className="btn waves-effect white black-text"
                                name="toggle"   >Add Social Network Links
            </button>
                        </div>
                    </div>

                    {displaySocialInputs &&

                        <div>
                            <div className="row">
                                <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 blue-text">
                                    <i className="fab fa-twitter prefix"></i>
                                    <input type="text" id="Twitter" name="twitter" value={twitter} onChange={(e) => handleChange(e)} />
                                    <label for="Twitter">Twitter URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 blue-text">
                                    <i className="fab fa-facebook prefix"></i>
                                    <input type="text" id="Facebook" name="facebook" value={facebook} onChange={(e) => handleChange(e)} />
                                    <label for="Facebook">Facebook URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 blue-text">
                                    <i className="fab fa-youtube prefix"></i>
                                    <input type="text" id="Youtube" name="youtube" value={youtube} onChange={(e) => handleChange(e)} />
                                    <label for="Youtube">Youtube URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 blue-text">
                                    <i className="fab fa-linkedin prefix"></i>
                                    <input type="text" id="Linkedin" name="linkedin" value={linkedin} onChange={(e) => handleChange(e)} />
                                    <label for="Linkedin">Linkedin URL</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col xs12 s12 m4 offset-m1 offset-l2 blue-text">
                                    <i className="fab fa-instagram prefix"></i>
                                    <input type="text" id="insta" name="instagram" value={instagram} onChange={(e) => handleChange(e)} />
                                    <label for="insta">Instagram URL</label>
                                </div>
                            </div>

                        </div>


                    }





                    <div className="row">
                        <div className="input-field col xs6 s6 m4 offset-m1 offset-l2 white-text">
                            <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
                            </button>
                        </div>
                        <div className="input-field col xs6 s6 m4 pull-m2">
                            <Link to="/dashboard" className="btn waves-effect white black-text">
                                <i className="fas fa-arrow-left"></i><span> Go Back</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>





        </div>
    )


}

export default connect(null, { createProfile })(withRouter(CreateProfile));
