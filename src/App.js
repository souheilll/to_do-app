import './App.css';
import React, { useState, useEffect } from 'react'
import SignIn from './components/SignIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tasks from './components/Tasks';

function App() {
  const [user, setUser] = useState({ email: '', name: '', })
  const [etat, setEtat] = useState(false)

  const customId = "custom-id-yes";
  const notify = () => toast('please connect', { toastId: customId })
  const toastify = () => toast(`Welcome ${user.name}`)

  useEffect(() => {
    if (!etat) {
      notify()
    }
    if (etat) {
      toastify()
    }
  }, [etat])

  return (
    <div className="App">
      <ToastContainer />
      {!etat && <SignIn user={user} setUser={setUser} setEtat={setEtat} />}
      {etat && <Tasks />}
    </div>

  );
}
export default App;
