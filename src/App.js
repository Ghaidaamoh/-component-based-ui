import logo from './logo.svg';
import axios from 'axios';
import './App.scss';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Result from './component/result/Result';
import FormComponent from './component/form/FormComponent';
import Loading from './component/loding/Loding'
import React, { Component } from 'react'
import { useState, useEffect, useReducer } from 'react';
import History from './component/history/History';
import { initialState, historyReducer, addAction } from './component/history/Reducer';

function App() {

  const [data, setData] = useState(
    { headers: 'headers', data: "Results" }
  );
  const [method, setMethod] = useState(
    'get'
  );
  const [loading, setloading] = useState(
    false
  );

  const [reqinfo, setreqinfo] = useState(
    { method: 'get', url: 'link', reqBody: {} }

  );
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const apiData = (myapi) => {
    setreqinfo(myapi)
  }

  const getOldResult = (myResult) => {
    setData(myResult)
  }

  useEffect(() => {
    async function getApiData() {
      console.log(reqinfo)
      if (reqinfo.url) {
        const { url, method, reqBody } = reqinfo
        //////////
        let formData = reqinfo.url
        let myButton = reqinfo.method
        let resultData
        setloading(true)
        console.log(myButton);
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
          console.log('axiosfinished');

          setMethod(myButton)

          setloading(false)

          setData(lastResult)
          console.log(lastResult);
          dispatch(addAction({ url: url, method: method, result: lastResult }));
        }
        catch (err) {

          let newObj = {
            headers: `Faild to ${myButton} this link ${formData}`,
            data: err
          }
          let lastResult = newObj
          setMethod(myButton)

          setloading(false)

          setData(lastResult)
          console.log(err);
        }

      }
    }
    getApiData();
  }, [reqinfo])

  return (
    <div className="App">
      <Header theHeader={'RESTy'} />
      <FormComponent apiData={apiData} />
      {
        loading &&
        <Loading />
      }
      <br/>
      <Result data={data} />
      <History history={state.history} getOldResult={getOldResult} />
      <Footer thefooter={'© 2018 Code Fellows'} />
    </div>
  );
}

export default App;






// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: { headers: 'headers', data: "Results" },
//       method: 'get',
//       loading: false

//     }
//   }



// formfun = async (e) => {
//   e.preventDefault();

//   let formData = e.target.email.value

//   let myButton = e.target.myButton.textContent
//   // console.log(myButton)
//   let resultData
//   this.setState({ loading: true })
//   try {
//     if (myButton === 'get') {
//       console.log('get')
//       resultData = await axios.get(formData)
//     } else if (myButton === 'post') {
//       console.log('post')
//       resultData = await axios.post(formData)
//     } else if (myButton === 'delete') {
//       console.log('delete')
//       resultData = await axios.delete(formData)
//     } else if (myButton === 'put') {
//       console.log('put')
//       resultData = await axios.put(formData)
//     }

//     let lastResult = resultData
//     console.log(resultData);

//     this.setState({
//       method: myButton,
//       loading: false,
//       data: lastResult
//     })

//   } catch (err) {

//     let newObj = {
//       headers: `Faild to ${myButton} this link ${formData}`,
//       data: err
//     }
//     let lastResult = newObj
//     this.setState({
//       method: myButton,
//       loading: false,
//       data: lastResult

//     })
//     console.log(err);
//   }

// }

// render() {
//   return (

//     <div className="App">
//       <Header theHeader={'RESTy'} />
//       <FormComponent formfun={this.formfun} />
//       {
//         this.state.loading &&
//         <Loading />
//       }
//       <Result method={this.state.method} data={this.state.data} />
//       <Footer thefooter={'© 2018 Code Fellows'} />
//     </div>

//   )
// }
// }

// export default App