import './App.css';
import {useSelector} from 'react-redux'; //this is for reading current value of ther soter which we are created


function App() {
  const userList = useSelector((state) => state.users.value)
  return (
    <div className="App">
   <div className="addUser">
    <input type="text" placeholder='enter you name'/>
    <input type="text" placeholder='enter you username...' />
   <button>AddUser</button>
   </div>
   <div className="displayUsers">
    {userList.map((user) => {
      return <h1>{user.name}</h1>
    })}
   </div>
    </div>
  );
}

export default App;
