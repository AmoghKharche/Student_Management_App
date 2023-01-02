import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import CreateStudent from './CreateStudent';
import NavBar from './NavBar';
import {Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateStudent/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
