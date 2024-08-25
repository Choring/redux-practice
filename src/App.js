import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from './redux/component/Box';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const pw = useSelector(state => state.pw);
  const increase = () => {
    dispatch({type:"INCREMENT", payload: {num:5}})
  }

  const decrease = () => {
    dispatch({type:"DECREMENT", payload: {num:5}});
  }
  
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"admin", pw:"1234"}})
  }
  return (
    <div>
      <h1>{count}</h1>
      <h2>{id + pw}</h2>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
