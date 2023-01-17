import type { FC } from 'react';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const ErrorModal: FC<{
  onConfirm: () => void;
  title?: string;
  message?: string;
}> = ({ onConfirm, title, message }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm} />
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

export default ErrorModal;
