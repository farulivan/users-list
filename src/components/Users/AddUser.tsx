import React, { useState } from 'react';
import { UserData } from '../../App';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser: React.FC<{ saveUserData: (inputData: UserData) => void }> = ({
  saveUserData,
}) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const addUserHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newUser = {
      username: enteredUserName,
      age: Number(enteredAge),
      email: enteredEmail,
    };
    saveUserData(newUser);
  };

  const userNameChangeHandler = ({currentTarget}: React.FormEvent<HTMLInputElement>) =>
    setEnteredUserName(currentTarget.value);

  const ageChangeHandler = ({currentTarget}: React.FormEvent<HTMLInputElement>) =>
    setEnteredAge(currentTarget.value);

  const emailChangeHandler = ({currentTarget}: React.FormEvent<HTMLInputElement>) =>
    setEnteredEmail(currentTarget.value);

  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <Button type="submit" onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
