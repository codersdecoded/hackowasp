import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../actions/profileaction'
import ProfileItem from './profileItem'


const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles])
    return (
        <div>
            {loading ? <Spinner /> :
                <div>
                    <section>

                        <div class="container">
                            <h2>Developers</h2>
                            <h4 id="supr"><i class="fab fa-connectdevelop"></i>Browse and connect with developers</h4>
                        </div>
                    </section>
                    <div class="section">
                        <div class="container">

                            <div class="profiles">
                                {profiles.length > 0 ? (


                                    profiles.map(profile => {
                                        return (
                                            <ProfileItem key={profile._id} profile={profile} />
                                        )
                                    })


                                ) : (<h4>No profiles found yet</h4>)}

                            </div>
                        </div>
                    </div>


                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        profile: state.profilereducer
    }
}



export default connect(mapStateToProps, { getProfiles })(Profiles);
