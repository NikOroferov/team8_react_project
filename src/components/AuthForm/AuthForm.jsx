import React from 'react';
import s from './Auth.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AuthForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required'),
    }),

    onSubmit: values => {
      console.log('войти', values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  function handleButton() {
    if (!Object.keys(formik.errors).length > 0) {
      const registration = formik.values;
      console.log('регистрация', registration);
    }
  }

  console.log(!formik.errors);
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperForm}>
        <div className={s.gogRegContainer}></div>
        <div className={s.formContainer}>
          <p className={s.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <form onSubmit={formik.handleSubmit} className={s.form}>
            <label className={s.label} htmlFor="email">
              Электронная почта
            </label>
            <input
              className={s.input}
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <p className={s.error}>{formik.errors.email}</p>
            ) : null}
            <label className={s.label} htmlFor="password">
              Пароль
            </label>
            <input
              className={s.input}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="password"
            />
            {formik.errors.password ? (
              <p className={s.error}>{formik.errors.password}</p>
            ) : null}

            <div className={s.butBox}>
              <button className={s.buttonAct} type="submit">
                <span className={s.butTextAct}>Войти</span>
              </button>
              <button
                className={s.buttonAct}
                type="button"
                onClick={() => handleButton()}
              >
                <span className={s.butTextAct}>Регистрация</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
