import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profileaction'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'


const Profile = ({ getProfileById, profile: { profile, loading }, auth, match }) => {

    useEffect(() => {
        getProfileById(match.params.id);

    }, [getProfileById, match.params.id]);

    return (

        <div>

            {profile === null || loading ? <Spinner /> : (

                <div class="" id="defs">
                    <Link to='/profiles' className="btn waves-effect white black-text"><i class="fas fa-arrow-left"></i>Back to Profiles</Link>
                    {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id
                        && <Link to='/edit-profile' className="btn waves-effect white black-text">Edit Profile</Link>}


                    <div class="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />



                        <div class="row" id="madar">

                            <div class="col s12 m6" id="set">
                                <h4>Experience</h4>

                                {profile.experience.length > 0 ?
                                    (

                                        profile.experience.map((exp, index) => (
                                            < ProfileExperience key={exp._id} experience={exp} />
                                        ))

                                    )

                                    : (<h4>No previous Experiences </h4>)}
                            </div>

                            <div class="col s12 m6" id="seet">
                                <h4>Experience</h4>

                                {profile.education.length > 0 ?
                                    (

                                        profile.education.map((edu, index) => (
                                            <ProfileEducation key={edu._id} education={edu} />
                                        ))

                                    )




                                    : (<h4>No Degrees attained  </h4>)}
                            </div>




                        </div>

                        {profile.githubusername && (<ProfileGithub username={profile.githubusername} />)}






                    </div>

                </div>



            )}
        </div>



    )


}

const mapStateToProps = (state) => {
    return {
        profile: state.profilereducer,
        auth: state.authreducer
    }
}

export default connect(mapStateToProps, { getProfileById })(Profile);