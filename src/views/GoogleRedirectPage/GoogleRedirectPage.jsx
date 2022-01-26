import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import s from './GoogleRedirectPage.module.css';
import Container from '../../components/Container/Container';
import imgText from '../../img/homepage/KapustaText.svg';

import { googleLogIn } from '../../redux/auth/auth-slice';
import api from '../../services/api-services';

export default function GoogleRedirectPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const balance = new URLSearchParams(location.search).get('balance');
  const token = new URLSearchParams(location.search).get('token');
  const email = new URLSearchParams(location.search).get('email');
  const name = new URLSearchParams(location.search).get('name');
  const avatar = new URLSearchParams(location.search).get('avatar');
  const newUser = {
    email,
    balance,
    token,
    name,
    avatar,
  };
  console.log(balance);
  console.log(token);
  console.log(email);
  console.log(name);
  console.log(avatar);

  api.token.set(token);

  useEffect(() => {
    dispatch(googleLogIn(newUser));
  }, []);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/cashflow" />;
  }

  return (
    <>
      <section className={s.section}>
        <Container>
          <div className={s.mainWrapper}>
            <div className={s.textWrapper}>
              <img className={s.kapusta} src={imgText} alt="Kapusta" />
              <h1 className={s.title}>smart finance</h1>
            </div>
            <div>
              <h2 className={s.notice}>Redirecting...</h2>
            </div>
            <div className={s.loginWrapper}></div>
          </div>
        </Container>
      </section>
    </>
  );
}
