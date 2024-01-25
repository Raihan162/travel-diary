import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss'
import CardJourney from '@components/CardJourney';
import { createBookmark, getBookmark } from './actions';
import { createStructuredSelector } from 'reselect';
import { selectBookmark } from './selectors';
import { useNavigate } from 'react-router-dom';

const Bookmark = ({ bookmark }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  console.log(bookmark)

  useEffect(() => {
    // dispatch(ping());
    dispatch(getBookmark())
  }, [dispatch]);

  const toDetail = (id) => {
    navigate(`/detail-post/${id}`)
  }

  const handlerAddBookmark = (id) => {
    dispatch(createBookmark({ postId: String(id) }))
  }

  return (
    <div className={classes.content}>
      <div className={classes.subTitle}>
        <h2>
          <FormattedMessage id='app_bookmark' />
        </h2>
      </div>
      <div className={classes.gridJourney}>
        {
          bookmark ?
            bookmark?.map((data, index) => {
              return (
                <CardJourney onClickDetail={() => toDetail(data?.id)} key={index} image={data?.postBookmarks.imageUrl} title={data?.postBookmarks.title} shortdesc={data?.postBookmarks.shortDesc} onClickBookmark={() => handlerAddBookmark(data?.id)} />
              )
            })
            :
            null
        }
      </div>
    </div>
  );
};

Bookmark.PropTypes = {
  bookmark: PropTypes.array,
  createBookmark: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark
})

export default connect(mapStateToProps)(Bookmark);
