import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Thanks from './Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/didyouccr?' element={<About/>}/>
        <Route path = '/thank_you' element={<Thanks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
