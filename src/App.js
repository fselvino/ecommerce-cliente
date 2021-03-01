import React from  'react'
import { Switch, Route} from 'react-router-dom'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Header from './components/nav/Header'
import 'antd/dist/antd.css'


const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
    </>
  );
}

export default App;
