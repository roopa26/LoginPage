import './App.css';
import {useState} from 'react'

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit =(e)=>{
    e.preventDefault();
    const {username, password} = e.target;
    if(username.value === 'user' && password.value === 'password'){
      setIsSuccess(true)
      setMessage("Welcome, user!");
      setIsInvalid(false);
    }
    else{
      setIsSuccess(false)
      setMessage("");
      setIsInvalid(true);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {isInvalid && (<label>Invalid username or password</label>)}
      {!isSuccess ? (
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input name='username' id="username" placeholder='username' value={username} onChange={(e)=>{setUserName(e.target.value)}} required/>
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' id="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        </div>
        <button type="submit">Submit</button>
      </form>):(<label>{message}</label>)}
    </div>
  );
}

export default App;
