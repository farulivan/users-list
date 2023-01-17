import type { FC } from 'react';
import { ReactNode } from 'react';
import styles from './Card.module.css';

const Card: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
