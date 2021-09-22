import logo from './logo.svg';
import axios from 'axios';
import './App.scss';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Result from './component/result/Result';
import FormComponent from './component/form/FormComponent';
import Loading from './component/loding/Loding'
import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { headers: 'headers', data: "Results" },
      method: 'get',
      loading: false

    }
  }

  formfun = async (e) => {
    e.preventDefault();

    let formData = e.target.email.value

    let myButton = e.target.myButton.textContent
    // console.log(myButton)
    let resultData
    this.setState({ loading: true })
    try {
      if (myButton === 'get') {
        console.log('get')
        resultData = await axios.get(formData)
      } else if (myButton === 'post') {
        console.log('post')
        resultData = await axios.post(formData)
      } else if (myButton === 'delete') {
        console.log('delete')
        resultData = await axios.delete(formData)
      } else if (myButton === 'put') {
        console.log('put')
        resultData = await axios.put(formData)
      }

      let lastResult = resultData
      console.log(resultData);

      this.setState({
        method: myButton,
        loading:false,
        data:lastResult
      })
 
    } catch (err) {
      
      let newObj = {
        headers: `Faild to ${myButton} this link ${formData}`,
        data: err
      }
      let lastResult = newObj
      this.setState({
        method: myButton,
        loading:false,
        data:lastResult

      })
      console.log(err);
    }

  }

  render() {
    return (

      <div className="App">
        <Header theHeader={'RESTy'} />
        <FormComponent formfun={this.formfun} />
        {
        this.state.loading &&
         <Loading />
      }
        <Result method={this.state.method} data={this.state.data} />
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
