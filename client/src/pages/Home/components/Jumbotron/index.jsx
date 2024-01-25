import React from 'react'
import { FormattedMessage } from 'react-intl'

import classes from './style.module.scss'

function Jumbotron() {
    return (
        <div className={classes.bgJumbotron}>
            <div className={classes.contentJumbotron}>
                <h1>
                    <FormattedMessage id="app_title_jumbotron" />
                </h1>
                <p>
                    <FormattedMessage id="app_shortdesc_jumbotron" />
                </p>
            </div>
        </div>
    )
}

export default Jumbotron