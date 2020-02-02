import React from 'react'

import Moment from 'react-moment'

const ProfileEducation = ({ education: { degree, school, fieldofstudy, to, from, description } }) => {

    return (
        <div>
            <h4>{degree}</h4>
            <Moment format='YYYY/MM/DD'>{from}</Moment> --{!to ? ('Now') : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            <h5>{school}</h5>
            <p><strong>{fieldofstudy}</strong></p>
            <p><strong>{description}</strong></p>
        </div>

    )

}

export default ProfileEducation; 