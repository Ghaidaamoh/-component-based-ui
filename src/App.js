import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Result from './component/Result';
import FormComponent from './component/FormComponent';

function App() {
 
  const [email, setEmail] = useState(
    'Email !'
  );
  const [userName, setUserName] = useState(
    'User Name!'
  );
  const formfun= (e)=> {
    e.preventDefault();
let userName= e.target.userName.value
let email= e.target.email.value

setEmail(email)
setUserName(userName)
  }
  
  return (
    <div className="App">
      <Header />
      <FormComponent formfun={formfun} />
      <Result email={email} userName={userName} />
      <Footer />
    </div>
  );
}

export default App;
