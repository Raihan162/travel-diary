import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@mui/material';

import CardAuth from '@components/CardAuth';
import { register } from './actions';

import classes from './style.module.scss'
import encryptPayload from '@utils/encryptHelper';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value
    })
  }

  const onSubmit = () => {
    if (!user.fullname || !user.email || !user.password) {
      return toast.error('Please fill out all data')
    }

    if (!user.email.includes('@') || !user.email.includes('.co')) {
      return toast.error("Invalid format email")
    }

    if (user.password.length < 6) {
      return toast.error('Password minimal 6 character')
    }
    const dataUser = {
      fullname: encryptPayload(user.fullname),
      email: encryptPayload(user.email),
      password: encryptPayload(user.password)
    }
    dispatch(register(dataUser))
    navigate('/login')
  }

  return (
    <>
      <div className={classes.container}>
        <CardAuth
          title={"app_register"}
          onChangeFullName={(e) => onChangeHandler(e.target.value, 'fullname')}
          onChangeEmail={(e) => onChangeHandler(e.target.value, 'email')}
          onChangePassword={(e) => onChangeHandler(e.target.value, 'password')}
          onClickRegister={() => onSubmit()}
        />
      </div>
      <Toaster />
    </>
  );
};

export default Register;
