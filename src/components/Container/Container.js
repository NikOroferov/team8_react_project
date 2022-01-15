import React from 'react';
import s from './Container.module.css'

const Container = ({ children }) => (
    <main className={s.main}>
        <div className={s.container}>{children}</div>
  </main>
);

export default Container;
