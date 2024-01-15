import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Login from './Login';
import Success from './Success';

function App() {

  const [success, setSuccess] = useState(false)
  const [id, setId] = useState("")
  const [errMsg, setErrMsg] = useState("")
  
  function handleLogin(id){
    if(id==""){
      setErrMsg("id를 입력해주세요!!!")
    }else{
    fetch('https://test-server-nuv2.onrender.com/login/' + id)
    .then(res=>res.json())
    .then(data=>{

      if(data.msg!=""){
        setSuccess(true)    
        setId(data.msg)  
      } else{
        setErrMsg("일치하는 id가 없습니다!!!")
      }
    })
    }
  }

  function gotoLogin(){
    setSuccess(false)
    setErrMsg("")
  }
    
  return (
    <>
    {!success ? <Login errMsg={errMsg} click = {handleLogin}/> : <Success id={id} gotoLogin={gotoLogin}/>}
    </>
  );
}

export default App;