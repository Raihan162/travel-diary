import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button, TextField } from '@mui/material';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss'

const CardAuth = ({ title, onChangeFullName, onChangeEmail, onChangePassword, onClickLogin, onClickRegister, onClickToRegister }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ping());
    }, [dispatch]);

    return (
        <div className={title === 'app_login' ? classes.card : classes.cardRegister}>
            <div className={classes.titleLogin}>
                <h3>
                    <FormattedMessage id={title} />
                </h3>
            </div>
            {
                title === 'app_login' ?
                    null
                    :
                    <div className={classes.inputContainer}>
                        <label htmlFor="full_name">
                            <FormattedMessage id="app_full_name" />
                        </label>
                        <input onChange={onChangeFullName} type="text" />
                    </div>
            }
            <div className={classes.inputContainer}>
                <label htmlFor="email">
                    <FormattedMessage id="app_email" />
                </label>
                <input onChange={onChangeEmail} type="email" />
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="password">
                    <FormattedMessage id="app_password" />
                </label>
                <input onChange={onChangePassword} type="password" />
            </div>

            <Button onClick={title === 'app_login' ? onClickLogin: onClickRegister} variant='contained' sx={{ width: '100%' }} className={title === 'app_login' ? classes.titleButtonLogin : classes.titleButtonRegister}>
                <FormattedMessage id={title} />
            </Button>

            {
                title === 'app_login' ?
                    <Button onClick={onClickToRegister} className={classes.donthaveacc}>
                        <FormattedMessage id="app_dont_have_account" />
                    </Button>
                    :
                    null
            }
        </div>
    );
};

export default CardAuth;
