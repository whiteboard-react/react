import './App.css';
import './components/styles/index.css';
import Index from './components/pages/Index'
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Whiteboard from './components/pages/Whiteboard';


function App() {
  return (
    < >
          <Routes>
     
        <Route path='/' element={ <Index />}>

        </Route>
        <Route path='/home' element={<Home/>}>

        </Route>

         <Route path='/whiteboard' element={<Whiteboard/>}>

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
