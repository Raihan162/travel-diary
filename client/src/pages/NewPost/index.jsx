import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { ping, showPopup } from '@containers/App/actions';

import classes from './style.module.scss'
import { addJourney } from './actions';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLogin, selectToken } from '@containers/Client/selectors';

const NewPost = ({ token }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formDataUser, setFormDataUser] = useState({
    imageUrl: null,
    title: "",
    shortDesc: "",
    description: ""
  })

  const onChangeHandlerImage = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setFormDataUser({ ...formDataUser, imageUrl: file })
    // const fileType = file.type.split('/')[0]
    // if (fileType !== 'image') {
    //   dispatch(showPopup('Error'));
    //   return
    // }

  }
  // console.log(formDataUser)
  const submitData = () => {
    const formData = new FormData();
    formData.append("imageUrl", formDataUser.imageUrl);
    formData.append("title", formDataUser.title);
    formData.append("shortDesc", formDataUser.shortDesc);
    formData.append("description", formDataUser.description)

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    dispatch(addJourney(formData, () => {
      return navigate('/profile')
    }))
  }

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className={classes.content}>
      <div className={classes.subTitle}>
        <h2>
          <FormattedMessage id="app_new_journey" />
        </h2>
      </div>
      <div className={classes.uploadImageContainer}>
        <h3>
          <FormattedMessage id="app_upload_image" />
        </h3>
        <Button onChange={onChangeHandlerImage} className={classes.buttonUpload} component="label" variant="contained" startIcon={<CloudUpload />}>
          Upload file
          <VisuallyHiddenInput type="file" accept="image/png, image/jpeg" />
        </Button>
      </div>
      <div className={classes.titleContainer}>
        <h3>
          <FormattedMessage id="app_title" />
        </h3>
        <input onChange={(e) => setFormDataUser({ ...formDataUser, title: e.target.value })} type="text" />
      </div>
      <div className={classes.shortDescContainer}>
        <h3>
          <FormattedMessage id="app_short_desc" />
        </h3>
        <input onChange={(e) => setFormDataUser({ ...formDataUser, shortDesc: e.target.value })} type="text" className={classes.shortDesc} />
      </div>
      <div className={classes.descContainer}>
        <h3>
          <FormattedMessage id="app_description" />
        </h3>
        <ReactQuill onChange={(e) => setFormDataUser({ ...formDataUser, description: e })} className={classes.desc} />
      </div>
      <div className={classes.buttonPost}>
        <button onClick={() => submitData()}>
          <FormattedMessage id='app_post' />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectLogin
})

export default connect(mapStateToProps)(NewPost);
