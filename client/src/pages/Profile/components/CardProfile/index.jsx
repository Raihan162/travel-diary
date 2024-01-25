import React from 'react'

import ProfilePicture from '@static/images/pp.jpeg'

import classes from './style.module.scss'

function CardProfile({profilePicture, name, email}) {
    return (
        <div className={classes.profileContainer}>
            <img src={ProfilePicture} alt="Profile Picture" />
            <p className={classes.name}>
                {name}
            </p>
            <p className={classes.email}>
                {email}
            </p>
        </div>
    )
}

export default CardProfile