import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './CommonModal.module.css';
import closeBtn from '../../img/closeBtn.png';
import Button from '../Button';

export default function CommonModal({ toggleModal, modalText }) {
  const portalModal = document.querySelector('#modalRoot');

  const escModal = e => {
    console.log(e.code);
    if ((e.code = 'Escape')) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escModal);
    return () => {
      window.removeEventListener('keydown', escModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={clickBackdrop}>
      <div className={css.exitModal}>
        <button type="button" className={css.closeBtn} onClick={toggleModal}>
          <img src={closeBtn} alt="closeButton" />
        </button>

        <p className={css.title}>{modalText}</p>

        <div className={css.btnContainer}>
          <Button name="Да" click={null} />
          <Button name="Нет" click={toggleModal} />
        </div>
      </div>
    </div>,
    portalModal,
  );
}
