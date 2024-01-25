import React, { useState } from 'react'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';

import imgJourney from '../../static/images/imgJourney.jpeg'

import classes from './style.module.scss'

function CardJourney({ image, title, timestamp, shortdesc, onClickDetail, onClickBookmark }) {

    return (
        <div className={classes.card}>
            <div className={classes.cardContent}>
                <div className={classes.imgJourney}>
                    <img src={image} alt="Image" />
                </div>
                <div onClick={onClickDetail} className={classes.infoJourney}>
                    <h3 className={classes.titleJourney}>
                        {title}
                    </h3>
                    <p className={classes.timestampJourney}>
                        {timestamp}
                    </p>
                    <p className={classes.shortdescJourney}>
                        {shortdesc}
                    </p>
                </div>
                <div onClick={onClickBookmark} className={classes.bookmarkContainer}>
                    {/* <BookmarkSharpIcon sx={{ color: '#3B97D3' }} fontSize='small' /> */}

                    <BookmarkBorderSharpIcon sx={{ color: '#3B97D3' }} fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default CardJourney