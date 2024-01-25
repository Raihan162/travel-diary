import React from 'react'
import { Button } from '@mui/material'
import { FormattedMessage } from 'react-intl'

function ButtonComponent({ text, variant, onClick }) {
    return (
        <Button
        onClick={onClick}
        variant={variant}
        sx
        >
            <FormattedMessage id={text} />
        </Button>
    )
}

export default ButtonComponent