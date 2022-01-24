import { Navigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './HomePage.module.css';
import Container from '../../components/Container/Container';
import imgText from '../../img/homepage/KapustaText.svg';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const navigate = useNavigate();
  // if (isLoggedIn) {
  //   navigate('/cashflow');
  // }

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
            <div className={s.loginWrapper}>
              <AuthForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
