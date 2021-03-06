import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import {useStateValue} from './StateProvider';
import {auth} from './firebase'
import Payment from './Payment';


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])
  console.log(user)
 
  return (
    <>
    <BrowserRouter>
     <div className="app">
       <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Payment/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
       </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
