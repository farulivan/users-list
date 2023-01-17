import React, { useState } from 'react';
import { UserData } from '../../App';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

type Error = {
  title?: string;
  message?: string;  
}

const AddUser: React.FC<{
  onAddUser: (inputData: UserData) => void;
}> = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [error, setError] = useState<Error>();

  const addUserHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredEmail.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name, age, and email (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (>0).'
      })
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

  const errorHandler = () => {
    setError(undefined);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </>
  );
};

export default AddUser;
