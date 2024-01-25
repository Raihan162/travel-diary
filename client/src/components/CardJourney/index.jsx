import React, { useState } from 'react'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';

import imgJourney from '../../static/images/imgJourney.jpeg'

import classes from './style.module.scss'

function CardJourney({ image, title, timestamp, shortdesc }) {

    const [change, setChange] = useState(false)

    return (
        <div className={classes.card}>
            <div className={classes.cardContent}>
                <div className={classes.imgJourney}>
                    <img src={imgJourney} alt="Image" />
                </div>
                <div className={classes.infoJourney}>
                    <h3 className={classes.titleJourney}>
                        Bersemayam di tanah Dewata
                    </h3>
                    <p className={classes.timestampJourney}>
                        29 July 2020, Cipto
                    </p>
                    <p className={classes.shortdescJourney}>
                        Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
                    </p>
                </div>
                <div onClick={() => setChange(!change)} className={classes.bookmarkContainer}>
                    {/* <BookmarkSharpIcon sx={{ color: '#3B97D3' }} fontSize='small' /> */}

                    <BookmarkBorderSharpIcon sx={{ color: '#3B97D3' }} fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default CardJourney