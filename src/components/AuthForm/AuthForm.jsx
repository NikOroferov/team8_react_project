import React from 'react';
import s from './Auth.module.css';
import { useFormik } from 'formik';

export default function AuthForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperForm}>
        <div className={s.gogRegContainer}></div>
        <div className={s.formContainer}>
          <p className={s.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>

          <form onSubmit={formik.handleSubmit} className="formContainer">
            <label htmlFor="email">"Электронная почта"</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">"Электронная почта"</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="password"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
