import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    minHeight: '100vh'
  },
  infoSide: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    backgroundColor: 'rgb(122, 204, 254)',
    overflow: 'hidden'
  },
  infoSideBackgroundIcon: {
    position: 'absolute',
    top: '-45vh',
    left: '-15vh',
    fontSize: 1250
  },
  infoSideListContainer: {
    margin: '0 auto',
    maxWidth: 380
  },
  infoSideList: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
    color: '#fff',
    listStyle: 'none'
  },
  infoSideListItem: {
    '& div': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 40,
      lineHeight: 30,
      zIndex: 9999
    }
  },
  infoSideListIcon: {
    marginRight: 15,
    fontSize: 38
  },
  infoSideListText: {
    fontSize: 20,
    fontWeight: 700
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    width: '50%'
  },
  loginContainer: {
    margin: '0 auto',
    maxWidth: 380
  },
  loginSideIcon: {
    marginBottom: 20,
    fontSize: 42
  },
  loginSideTitle: {
    marginBottom: 59,
    fontSize: 30,
    fontWeight: 700,
    color: 'rgb(15, 20, 25)'
  },
  loginSideSubtitle: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 700,
    color: 'rgb(15, 20, 25)'
  },
  loginSideBtn: {
    marginBottom: 15
  }
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.infoSide}>
        <TwitterIcon className={classes.infoSideBackgroundIcon} color='primary' />
        <div className={classes.infoSideListContainer}>
          <ul className={classes.infoSideList}>
            <li className={classes.infoSideListItem}>
              <div>
                <SearchIcon className={classes.infoSideListIcon} />
                <Typography className={classes.infoSideListText}>Читайте о том, что вам интересно.</Typography>
              </div>
            </li>
            <li className={classes.infoSideListItem}>
              <div>
                <PeopleOutlineIcon className={classes.infoSideListIcon} />
                <Typography className={classes.infoSideListText}>Узнайте, о чем говорят в мире.</Typography>
              </div>
            </li>
            <li className={classes.infoSideListItem}>
              <div>
                <ChatBubbleOutlineIcon className={classes.infoSideListIcon} />
                <Typography className={classes.infoSideListText}>Присоединяйтесь к общению.</Typography>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.loginSide}>
        <div className={classes.loginContainer}>
          <TwitterIcon className={classes.loginSideIcon} color='primary' />
          <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography className={classes.loginSideSubtitle} variant='subtitle1'>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
          <Button className={classes.loginSideBtn} variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
          <Button className={classes.loginSideBtn} variant='outlined' color='primary' fullWidth>Войти</Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;