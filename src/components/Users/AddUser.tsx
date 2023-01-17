import React, { useState } from 'react';
import { UserData } from '../../App';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser: React.FC<{ onAddUser: (inputData: UserData) => void }> = ({
  onAddUser,
}) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const addUserHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    const newUser = {
      username: enteredUserName,
      age: +enteredAge,
      email: enteredEmail,
      id: Math.random().toString(),
    };
    onAddUser(newUser);

    setEnteredUserName('');
    setEnteredAge('');
    setEnteredEmail('');
  };

  const userNameChangeHandler = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) =>
    setEnteredUserName(currentTarget.value);

  const ageChangeHandler = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => setEnteredAge(currentTarget.value);

  const emailChangeHandler = ({
    currentTarget,
  }: React.FormEvent<HTMLInputElement>) => setEnteredEmail(currentTarget.value);

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
        <Button type="submit" onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
