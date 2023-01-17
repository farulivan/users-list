import React from 'react';
import { UserData } from '../App';
import Card from './UI/Card';
import styles from './UsersList.module.css';

const UsersList: React.FC<{ usersList: UserData[] }> = ({ usersList }) => {
  return (
    <Card className={styles.users}>
      {usersList ? usersList.map(user => (
        <ul key={user.email}>
          <li>{user.username}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      )): ''}
    </Card>
  );
};

export default UsersList;
