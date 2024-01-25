import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss'
import CardAuth from '@components/CardAuth';
import { useNavigate } from 'react-router-dom';
import encryptPayload from '@utils/encryptHelper';
import { postLoginRequest } from './actions';
import { setLogin, setToken } from '@containers/Client/actions';
import { selectLogin } from './selectors';

const Login = ({ login }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [user, setUser] = useState({})

  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value
    })
  }

  const onSubmit = () => {
    const loginUser = {
      email: encryptPayload(user.email),
      password: encryptPayload(user.password)
    }
    // console.log(login, '<<<SUBMIT')
    dispatch(postLoginRequest(loginUser))
    dispatch(setToken(login.data.token))
    dispatch(setLogin(true))
    navigate('/')
  }

  const toRegisterPage = () => {
    navigate("/register")
  }

  return (
    <div className={classes.container}>
      <CardAuth
        onChangeEmail={(e) => onChangeHandler(e.target.value, 'email')}
        onChangePassword={(e) => onChangeHandler(e.target.value, 'password')}
        onClickLogin={() => onSubmit()}
        onClickToRegister={toRegisterPage}
        title={"app_login"}
      />
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  login: selectLogin
})

export default connect(mapStateToProps)(Login);
