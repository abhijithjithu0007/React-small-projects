// App.js
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Todo from './component/Todo';
import StopWatch from './component/Stopwatch';
import Login from './router-project/Login';
import Registration from './router-project/Registration';
import Home from './router-project/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

