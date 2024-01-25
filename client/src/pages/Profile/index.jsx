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
import { selectPost, selectProfile } from './selectors';
import { createStructuredSelector } from 'reselect';
import { getProfilePost, getProfileUser } from './actions';
import { useNavigate } from 'react-router-dom';

const Profile = ({ profile, myPost }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
    dispatch(getProfilePost())
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <div className={classes.subTitle}>
        <h2>
          <FormattedMessage id='app_profile' />
        </h2>
      </div>
      <div className={classes.containerCard}>
        <CardProfile name={profile?.profile?.fullname} email={profile?.profile?.email} />
      </div>
      <div className={classes.containerButtonAddNewPost}>
        <Button onClick={() => navigate('/create-post')} variant="contained">
          <FormattedMessage id="app_add_new_post" />
        </Button>
      </div>
      <div className={classes.gridJourney}>
        {
          myPost?.map((data, index) => {
            return (
              <CardJourney image={data?.imageUrl} title={data?.title} shortdesc={data?.shortDesc} />
            )
          })
        }
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  myPost: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  myPost: selectPost
})

export default connect(mapStateToProps)(Profile);
