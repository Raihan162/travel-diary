import React from 'react'

import Triangle from '@static/images/triangle.svg'
import Profile from '@static/images/user.svg'
import Write from '@static/images/write.svg'
import Bookmark from '@static/images/bookmark.svg'
import Logout from '@static/images/logout.svg'

import classes from './style.module.scss'
import { FormattedMessage } from 'react-intl'

function Dropdown({onClickProfile, onClickWrite, onClickBookmark, onClickLogout}) {
    return (
        <div className={classes.container}>
            <div className={classes.boxDropdown}>
                <button onClick={onClickProfile} className={classes.dropdownContent}>
                    <img src={Profile} alt="Icon Profile" />
                    <p>
                        <FormattedMessage id="app_profile" />
                    </p>
                </button>
                <button onClick={onClickWrite} className={classes.dropdownContent}>
                    <img src={Write} alt="Icon Write" />
                    <p>
                        <FormattedMessage id="app_new_journey" />
                    </p>
                </button>
                <button onClick={onClickBookmark} className={classes.dropdownContent}>
                    <img src={Bookmark} alt="Icon Bookmark" />
                    <p>
                        <FormattedMessage id="app_bookmark" />
                    </p>
                </button>
                <button onClick={onClickLogout} className={classes.dropdownContent}>
                    <img src={Logout} alt="Icon Logout" />
                    <p>
                        <FormattedMessage id="app_logout" />
                    </p>
                </button>
            </div>
            <div className={classes.triangle}>
                <img src={Triangle} alt="" />
            </div>
        </div>
    )
}

export default Dropdown