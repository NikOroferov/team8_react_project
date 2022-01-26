import React from 'react';
import { ReactComponent as GoogleBtnIcon } from '../../img/homepage/GoogleBtnIcon.svg';
import s from './GoogleAuthBtn.module.css';

function GoogleAuthBtn() {
  return (
    <a
      href="https://mongo-kapusta-team8.herokuapp.com/api/auth/googleLogin"
      rel="noreferrer"
      target="_blank"
      className={s.googleBtn}
    >
      <GoogleBtnIcon />
      <span className={s.googleBtnText}>Google</span>
    </a>
  );
}

export default GoogleAuthBtn;
