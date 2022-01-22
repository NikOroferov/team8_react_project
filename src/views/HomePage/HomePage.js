import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import s from './HomePage.module.css';
import Container from '../../components/Container/Container';
import imgText from '../../img/homepage/KapustaText.svg';

export default function HomePage() {
  return (
    <>
      <button>
        <Link to="/cashflow">Go to Cashflo</Link>
      </button>
      <button>
        <Link to="/reports">Go to ReportsPage</Link>
      </button>
      <button>
        <Link to="/google-redirect">GoogleRedirectView</Link>
      </button>
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
