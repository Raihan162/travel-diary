import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button, TextField } from '@mui/material';

import { ping } from '@containers/App/actions';
import Jumbotron from './components/Jumbotron';
import CardJourney from '@components/CardJourney';
import ButtonComponent from '@components/ButtonComponent';

import classes from './style.module.scss'
import Dropdown from '@components/Dropdown';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import { getAllPost } from './actions';
import { selectAllPost } from './selectors';
import { useNavigate } from 'react-router-dom';
import { createBookmark } from '@pages/Bookmark/actions';

const Home = ({ login, allPost }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changeBookmark, setChangeBookmark] = useState(false)

  const toDetail = (id) => {
    navigate(`/detail-post/${id}`)
  }

  useEffect(() => {
    dispatch(ping());
    dispatch(getAllPost())
  }, [dispatch]);


  const handlerAddBookmark = (id) => {
    dispatch(createBookmark({ postId: String(id) }))
  }

  return (
    <div>
      {
        login ?
          null
          :
          <Jumbotron />
      }
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
          {
            allPost?.map((data, index) => {
              return (
                <CardJourney onClickDetail={() => toDetail(data?.id)} key={index} image={data?.imageUrl} title={data?.title} shortdesc={data?.shortDesc} onClickBookmark={() => handlerAddBookmark(data?.id)} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  login: PropTypes.bool,
  allPost: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
  allPost: selectAllPost
})

export default connect(mapStateToProps)(Home);
