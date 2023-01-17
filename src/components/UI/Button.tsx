import type { FC, ReactNode } from 'react';
import styles from './Button.module.css';

type Button = {
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<{
  children: ReactNode;
  type: Button['type'];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ type, children, onClick }) => {
  return (
    <button className={styles.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
