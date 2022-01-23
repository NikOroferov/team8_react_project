import React from 'react';
// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { register, logIn } from '../../redux/auth/auth-operation';
import { authOperations } from '../../redux/auth';
import s from './Auth.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import GoogleAuthBtn from '../GoogleAuthBtn/GoogleAuthBtn';

export default function AuthForm() {
  const dispatch = useDispatch();

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
      const email = formik.values.email;
      const password = formik.values.name;
      // dispatch(authOperations.logIn({ email, password }));
      dispatch(authOperations.logIn(formik.values));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const handleButtonReg = () => {
    if (!Object.keys(formik.errors).length > 0) {
      const registration = formik.values;
      const email = formik.values.email;
      const password = formik.values.password;
      dispatch(authOperations.register({ email, password }));

      console.log('регистрация', registration);

      formik.resetForm();
      alert('Вы зарегистрировались, введите свою почту и пароль еще раз');
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  // };

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperForm}>
        <div className={s.gogRegContainer}>
          <p className={s.text}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <GoogleAuthBtn />
          <GoogleLogin
            className={s.googleBtn}
            clientId="206254104485-oifk2jvjrjpas1im07mbr0eqdh4ot584.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <p className={s.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
        </div>

        <div className={s.formContainer}>
          <form onSubmit={formik.handleSubmit} className={s.form}>
            <div className={s.er}>
              {formik.errors.password && <p className={s.error}>*</p>}
              <label className={s.label} htmlFor="email">
                Электронная почта
              </label>
            </div>
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
            <div className={s.er}>
              {formik.errors.password && <p className={s.error}>*</p>}
              <label className={s.label} htmlFor="password">
                Пароль
              </label>
            </div>
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
                onClick={() => handleButtonReg()}
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
