import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({ profile: {
    user: { _id, name, avatar },
    status, company, location, skills
} }) => {
    return (
        <div class="profile white-text indigo row" id="g">
            <div class="col s12 m3 center">

                <img
                    class="circle responsive-img"
                    src={avatar}
                    alt="" />
            </div>
            <div class="col s12 m5 hide-on-small-only" >
                <div class="container left">

                    <h4 >{name}</h4>
                    <p>{status}{company && <span> at {company} </span>}</p>
                    <p>{location && <span> {location}</span>}</p>
                    <Link to={`profile/${_id}`} class="btn red">View Profile</Link>
                </div>
            </div>
            <div class="col s12 m5 center hide-on-med-and-up" >
                <div class="container">

                    <h4 >{name}</h4>
                    <p>{status}{company && <span>   at {company}</span>}</p>
                    <p>{location && <span> {location}</span>}</p>
                    <Link to={`profile/${_id}`} class="btn red">View Profile</Link>
                </div>
            </div>

            <div class="col m4 hide-on-small-only">

                <ul>
                    {skills.slice(0, 4).map((skill, index) => (

                        <li key={index} className="text-black">
                            <i class="fas fa-check"></i> {skill}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default ProfileItem;