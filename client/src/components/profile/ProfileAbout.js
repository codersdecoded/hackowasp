import React from 'react'


const ProfileAbout = ({ profile: {
    user: { name },
    bio, skills
} }) => {

    return (

        <div class="center">
            <div id="ch">

                <h5>{name.trim().split(' ')[0]}'s ' Bio</h5>
                <p>{bio}</p>
                <hr class="divider" />


                <h5>Skill Set</h5>
                <ul>
                    {skills.map((skill, index) => {
                        return (
                            < li key={index} className="text-black">
                                <i className="fas fa-check"></i>{skill} </li>
                        )
                    })}
                </ul>

            </div>
        </div >

    )

}

export default ProfileAbout;