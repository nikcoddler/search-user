import { useEffect, useRef, useState } from 'react';
import './App.css';
import SearchComponent from './components/serach-input';
import Userlist from './components/user-list';

function App() {

  const [users, setUsers]  = useState([]);
  const [filteredUsers, setFilteredUsers]  = useState([]);
  const [inputValue, setInputValue] = useState();

  const allUsers = useRef(null);

  const fetchUsers = async (username) => {
      try {
        const res =  await fetch(`https://api.github.com/users`);
      const data = await res.json();
      const usersUrls = data.map((user) => user.url) 
      getUserDetails(usersUrls);
      } catch (error) {
        console.log(error)
      }
  }

  const getUserDetails = async (usersUrls) => {
      let user = [];
      for(let i=0;i<usersUrls.length;i++){
          try {
          const res =  await fetch(usersUrls[i]);
          const data = await res.json();
          allUsers.current = data;
          user.push( allUsers.current)
          } catch (error) {
            console.log(error)
          }
      }

      setUsers(user)
  }

  useEffect(()=>{
      fetchUsers()
  }, [])

  if(users.length==0) {
    return (
      <div className=''>
        Loading Data...
      </div>
    )
  }

  return (
    <div className="App">
      
        <SearchComponent setFilteredUsers={setFilteredUsers} users={users} setInputValue={setInputValue} />
        <Userlist users={filteredUsers.length ==0 && !inputValue ? users : filteredUsers }/>
    </div>
  );
}

export default App;
