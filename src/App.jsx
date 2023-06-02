import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entry from './components/Entry'
import Home from './components/Home'
import Read from './components/Read'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/entry" element={<Entry/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/readPost' element={<Read/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
