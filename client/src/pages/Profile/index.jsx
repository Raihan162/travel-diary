import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import { Button, TextField } from '@mui/material';
import ButtonComponent from '@components/ButtonComponent';
import CardJourney from '@components/CardJourney';

import classes from './style.module.scss'
import CardProfile from './components/CardProfile';
import { selectProfile } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getProfileUser } from './actions';

const Profile = ({ profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <div className={classes.subTitle}>
        <h2>
          <FormattedMessage id='app_profile' />
        </h2>
      </div>
      <div className={classes.containerCard}>
        <CardProfile name={profile?.profile.fullname} email={profile?.profile.email} />
      </div>
      <div className={classes.containerButtonAddNewPost}>
        <Button variant="contained">
          <FormattedMessage id="app_add_new_post" />
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
  );
};

Profile.propTypes = {
  profile: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  profile: selectProfile
})

export default connect(mapStateToProps)(Profile);
