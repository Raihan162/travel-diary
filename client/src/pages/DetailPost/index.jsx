import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import imgJourney from '@static/images/imgJourney.jpeg'

import classes from './style.module.scss';
import { getDetailPost } from './actions';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectDetailPost } from './selectors';

const DetailPost = ({ detailPost }) => {

  const { id } = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
    dispatch(getDetailPost(id))
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <h3>
            {detailPost?.title}
          </h3>
        </div>
        <div className={classes.timeStamp}>
          <p>
            {detailPost?.timeStamp}
          </p>
        </div>
        <div className={classes.imageContainer}>
          <img src={detailPost?.imageUrl} alt="" />
        </div>
        <div className={classes.descContainer}>
          <div className={classes.desc} dangerouslySetInnerHTML={{ __html: detailPost?.description }} />
        </div>
      </div>
    </div>
  );
};

DetailPost.propTypes = {
  detailPost: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
  detailPost: selectDetailPost
})

export default connect(mapStateToProps)(DetailPost);
