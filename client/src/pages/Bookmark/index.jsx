import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss'
import CardJourney from '@components/CardJourney';

const Bookmark = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <div className={classes.subTitle}>
        <h2>
          <FormattedMessage id='app_bookmark' />
        </h2>
      </div>
      <div className={classes.gridJourney}>
        <CardJourney />
        <CardJourney />
        <CardJourney />
        <CardJourney />
        <CardJourney />
        <CardJourney />
        <CardJourney />
        <CardJourney />
      </div>
    </div>
  );
};

export default Bookmark;
