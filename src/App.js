import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckOrder from './CheckOrder';
import NewOrder from './NewOrder';
import ManageOrder from './ManageOrder';
import Sizing from './Sizing';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Thanks from './Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<ManageOrder/>}/>
        <Route path = '/new_order' element={<NewOrder/>}/>
        <Route path = '/check_order' element={<CheckOrder/>}/>
        <Route path = '/manage_order' element={<ManageOrder/>}/>
        <Route path = '/size_chart' element={<Sizing/>}/>
        <Route path = '/register' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/didyouccr?' element={<About/>}/>
        <Route path = '/thank_you' element={<Thanks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
