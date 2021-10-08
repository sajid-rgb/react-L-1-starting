import React, { useState } from 'react';
import './App.css';
function Header(props) {
  console.log(props)
  return (

    <li>{props.navigation.nav}</li>


  )
}

function Main(props) {
  console.log(props);
  return (
    <div className="main">
      <h6>{props.allName.name} </h6>
      <h6>{props.allName.roll} </h6>
      <h6>{props.count}</h6>
      <h6>{props.modifyMyValue}</h6>
    </div>
  )
}

function App() {
  const myName = [{ name: ' Sajid', roll: '1023' }, { name: 'Sajid', roll: '1023' }, { name: 'Sajid', roll: '1023' }, { name: 'Sajid', roll: '1023' }]
  const navBar = [{
    nav: 'Home',
  },
  {
    nav: 'About',
  },
  {
    nav: 'Contact'
  },
  {
    nav: 'Login'
  }]

  const [count, setCount] = useState(0)
  const [myValue, setMyValue] = useState("")
  const [modifyMyvalue, setModifyMyvalue] = useState('')
  const addToCart = () => {
    setCount(count + 1)
    setModifyMyvalue(myValue)
}
  const handleSetValue = (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value)

  }
  console.log(count);
  return (
    <div className="App">
      <ul className="navigation">
        {
          navBar.map(navigation => <Header navigation={navigation}> </Header>)
        }
      </ul>
      {/* {
        myName.map(allName => <div> <h1>{allName.name}</h1> <p>{allName.roll}</p></div>)
      } */}
      {
        myName.map(allName => <Main allName={allName} count={count} modifyMyValue={modifyMyvalue}></Main>)
      }
      {/* <Main myName={myName}></Main> */}
      <input type="text" onChange={handleSetValue} />
      <button onClick={addToCart}>Click to add</button>
    </div>
  );
}

export default App;
