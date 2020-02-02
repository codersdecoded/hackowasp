import React from 'react'


const ProfileTop = ({ profile: {
    user: { name, avatar },
    status, company, location, website, social
} }) => {

    return (

        <div class="center indigo white-text" id="buf">
            <img
                class="circle responsive-img"
                src={avatar}
                alt=""
            />
            <h2>{name}</h2>
            <h5>{status} {company && <span> at {company}</span>} </h5>
            <p>{location && <span> {location}</span>} </p>




            <div class="center">

                {website && <a href={website} target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-globe fa-2x"></i>
                </a>}

                {social && social.twitter &&
                    <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                }

                {social && social.facebook &&
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                }

                {social && social.linkedin &&
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                }

                {social && social.youtube &&

                    <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-youtube fa-2x"></i>
                    </a>
                }

                {social && social.instagram &&
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                }







            </div>
        </div>
    )
}

export default ProfileTop;