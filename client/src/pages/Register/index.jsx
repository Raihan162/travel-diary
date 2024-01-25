import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@mui/material';

import CardAuth from '@components/CardAuth';
import { register } from './actions';

import classes from './style.module.scss'
import encryptPayload from '@utils/encryptHelper';

const Register = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({})

  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value
    })
  }

  const onSubmit = () => {
    const dataUser = {
      fullname: encryptPayload(user.fullname),
      email: encryptPayload(user.email),
      password: encryptPayload(user.password)
    }
    dispatch(register(dataUser))
  }

  return (
    <div className={classes.container}>
      <CardAuth
        title={"app_register"}
        onChangeFullName={(e) => onChangeHandler(e.target.value, 'fullname')}
        onChangeEmail={(e) => onChangeHandler(e.target.value, 'email')}
        onChangePassword={(e) => onChangeHandler(e.target.value, 'password')}
        onClickRegister={() => onSubmit()}
      />
    </div>
  );
};

export default Register;
