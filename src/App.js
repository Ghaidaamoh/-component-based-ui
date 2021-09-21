import logo from './logo.svg';
import './style/App.scss';
import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Result from './component/Result';
import FormComponent from './component/FormComponent';

function App() {

  const [data, setData] = useState(
    []
  );
  
  const formfun = (e) => {
    e.preventDefault();

    let resultData = e.target.email.value

    setData(`get ${resultData}`)

  }

  

  return (
    <div className="App">
      <Header theHeader={'RESTy'} />
      <FormComponent formfun={formfun} />
      <Result data={data} />
      <Footer thefooter={'© 2018 Code Fellows'} />
    </div>
  );
}

export default App;
