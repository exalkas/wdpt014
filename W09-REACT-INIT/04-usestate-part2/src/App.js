import { useState } from "react";

function App(props) {

  // const [email, setEmail] = useState('')
  // const [pass, setPass] = useState('')

  const [userData, setUserData] = useState({
    email: '',
    pass: ''
  })

  const handleLogin = () => {
    console.log("Email is", userData.email)
    console.log("Pass is", userData.pass)
    // axios.post()
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <input 
        placeholder="type your email"
        className="border-2"
        value={userData.email}
        // onChange={e => setUserData({email: e.target.value})}
        onChange={e => setUserData({...userData, email: e.target.value})}
      />
      <input 
        placeholder="type your password"
        className="border-2"
        value={userData.pass}
        onChange={e => setUserData({...userData, pass: e.target.value})}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;