import type { FC } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop: FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay: FC<{
  onConfirm: () => void;
  title?: string;
  message?: string;
}> = ({ onConfirm, title, message }) => {
  return (
    <>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <div className={styles.actions}>
          <Button type="button" onClick={onConfirm}>
            Okay
          </Button>
        </div>
      </Card>
    </>
  );
};

const ErrorModal: FC<{
  onConfirm: () => void;
  title?: string;
  message?: string;
}> = ({ onConfirm, title, message }) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {createPortal(
        <ModalOverlay onConfirm={onConfirm} title={title} message={message} />,
        document.getElementById('modal-root') as HTMLElement
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
