import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ViewItem from './ViewItem';
import Sizing from './Sizing';
import CheckOrder from './CheckOrder';
import Login from './Login';
import Signup from './Signup';
import Thanks from './Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/view_item' element={<ViewItem/>}/>
        <Route path = '/size_chart' element={<Sizing/>}/>
        <Route path = '/checkout' element={<CheckOrder/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Signup/>}/>
        <Route path = '/didyouccr?' element={<About/>}/>
        <Route path = '/thank_you' element={<Thanks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
