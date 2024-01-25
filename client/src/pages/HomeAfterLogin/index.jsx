import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button, TextField } from '@mui/material';

import { ping } from '@containers/App/actions';
import Jumbotron from './components/Jumbotron';
import CardJourney from '@components/CardJourney';
import ButtonComponent from '@components/ButtonComponent';

import classes from './style.module.scss'
import Dropdown from '@components/Dropdown';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.content}>
        <div className={classes.subTitle}>
          <h2>
            <FormattedMessage id='app_journey' />
          </h2>
        </div>
        <div className={classes.searchBar}>
          <TextField placeholder='Find Journey' sx={{ width: '100%', backgroundColor: '#FFFFFF' }} className={classes.inputField} />
          <Button variant="contained" className={classes.buttonSearch}>
            <FormattedMessage id="app_search" />
          </Button>
        </div>
        <div className={classes.gridJourney}>
          <CardJourney />
          <CardJourney />
          <CardJourney />
          <CardJourney />
          <CardJourney />
        </div>
      </div>
    </div>
  );
};

export default Home;
