import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { Button, Stack } from '@mui/material';

import ButtonComponent from '@components/ButtonComponent';

import { setLocale, setTheme } from '@containers/App/actions';

import Icon from '../../static/images/Icon.png'
import IconBlack from '../../static/images/Icon-Black.png'
import PP from '@static/images/pp.jpeg'

import classes from './style.module.scss';
import Dropdown from '@components/Dropdown';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import { setLogin, setToken } from '@containers/Client/actions';

const Navbar = ({ title, locale, theme, login }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const [menuPosition, setMenuPosition] = useState(null);
  const [bgNavbar, setBgNavbar] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const changeBg = () => {
    if (window.scrollY >= 200) {
      setBgNavbar(true)
    } else {
      setBgNavbar(false)
    }
  }

  useEffect(() => {
    if (location?.pathname === '/') {
      setBgNavbar(false)
      window.addEventListener('scroll', changeBg)
    } else {
      setBgNavbar(true)
      window.removeEventListener('scroll', changeBg)
    }
  }, [location])

  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const toLogin = () => {
    navigate('/login')
  }

  const toRegister = () => {
    navigate('/register')
  }

  const toProfilePage = () => {
    setShowDropdown(false)
    navigate('/profile')
  }

  const toNewJourney = () => {
    setShowDropdown(false)
    navigate('/create-post')
  }

  const toBookmark = () => {
    setShowDropdown(false)
    navigate('/bookmark')
  }

  const logout = () => {
    setShowDropdown(false)
    dispatch(setLogin(false))
    dispatch(setToken(null))
  }

  return (
    <div className={bgNavbar ? classes.headerWrapperWhiteBg : classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={bgNavbar ? IconBlack : Icon} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.toolbar}>
          {/* <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
            {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
          </div> */}
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
          {
            login ?
              <button onClick={handleDropdown} className={classes.imgProfile}>
                <img src={PP} alt="Profile Picture" />
              </button>
              :
              location?.pathname === '/login' || location?.pathname === '/register' ?
                null
                :
                <Stack spacing={2} direction="row">
                  <Button onClick={toLogin} variant="outlined" sx={{ borderColor: bgNavbar ? "#2E86DE" : "#FFFFFF", border: '2px solid', color: bgNavbar ? "#2E86DE" : "#FFFFFF" }}>
                    <FormattedMessage id="app_login" />
                  </Button>
                  <Button onClick={toRegister} variant="contained" sx={{ borderColor: "#FFFFFF", border: '2px', color: "#FFFFFF" }}>
                    <FormattedMessage id="app_register" />
                  </Button>
                </Stack>
          }

        </div>

        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>

        {
          showDropdown ?
            <div className={classes.containerDropdown}>
              <Dropdown
                onClickProfile={() => toProfilePage()}
                onClickWrite={() => toNewJourney()}
                onClickBookmark={() => toBookmark()}
                onClickLogout={() => logout()}
              />
            </div>
            :
            null
        }

      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin
})

export default connect(mapStateToProps)(Navbar);
