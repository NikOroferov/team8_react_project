import React from 'react';
import { ReactComponent as GoogleBtnIcon } from '../../img/homepage/GoogleBtnIcon.svg';
import s from './GoogleAuthBtn.module.css';

function GoogleAuthBtn() {
  return (
    <a
      href="http://localhost:3001/api/auth/googleLogin"
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
