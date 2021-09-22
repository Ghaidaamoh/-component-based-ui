import logo from './logo.svg';
import './App.scss';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Result from './component/result/Result';
import FormComponent from './component/form/FormComponent';

import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:""
    }
  }
  formfun = (e) => {
    e.preventDefault();

    let resultData = e.target.email.value

    this.setState({ data:`get ${resultData}`})

  }

  render() {
    return (

      <div className="App">
        <Header theHeader={'RESTy'} />
        <FormComponent formfun={this.formfun} />
        <Result data={this.state.data} />
        <Footer thefooter={'© 2018 Code Fellows'} />
      </div>

    )
  }
}

export default App


// function App() {

//   const [data, setData] = useState(
//     []
//   );

//   const formfun = (e) => {
//     e.preventDefault();

//     let resultData = e.target.email.value

//     setData(`get ${resultData}`)

//   }



//   return (
//     <div className="App">
//       <Header theHeader={'RESTy'} />
//       <FormComponent formfun={formfun} />
//       <Result data={data} />
//       <Footer thefooter={'© 2018 Code Fellows'} />
//     </div>
//   );
// }

// export default App;
