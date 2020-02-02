import React from 'react'

import Moment from 'react-moment'

const ProfileExperience = ({ experience: { company, title, location, to, from, description } }) => {

    return (
        <div>
            <h5>{company}</h5>
            <Moment format='YYYY/MM/DD'>{from}</Moment> --{!to ? ('Now') : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            <p><strong>{title}</strong></p>
            <p><strong>{description}</strong></p>
        </div>

    )

}

export default ProfileExperience; 