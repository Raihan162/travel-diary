import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { ping } from '@containers/App/actions';

import classes from './style.module.scss'

const NewPost = () => {
  const dispatch = useDispatch();
  

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
        <Button className={classes.buttonUpload} component="label" variant="contained" startIcon={<CloudUpload />}>
          Upload file
          <VisuallyHiddenInput type="file" accept="image/png, image/jpeg" />
        </Button>
      </div>
      <div className={classes.titleContainer}>
        <h3>
          <FormattedMessage id="app_title" />
        </h3>
        <input type="text" />
      </div>
      <div className={classes.shortDescContainer}>
        <h3>
          <FormattedMessage id="app_short_desc" />
        </h3>
        <input type="text" className={classes.shortDesc} />
      </div>
      <div className={classes.descContainer}>
        <h3>
          <FormattedMessage id="app_description" />
        </h3>
        <ReactQuill className={classes.desc} />
      </div>
      <div className={classes.buttonPost}>
        <button>
          <FormattedMessage id='app_post' />
        </button>
      </div>
    </div>
  );
};

export default NewPost;
