import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList';

export type UserData = {
  username: string;
  age: number;
  email: string;
  id: string;
};

const App = () => {
  const [usersList, setUsersList] = useState<UserData[]>([]);

  const addUserHandler = (newUser: UserData) =>
    setUsersList(prevUsers => [newUser, ...prevUsers]);

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
};

export default App;
