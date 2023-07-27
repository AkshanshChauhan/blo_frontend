import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Selection from './components/Selection';
import Selection2 from './components/Selection2';
import Edit from './components/Edit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/selection' element={<Selection />} />
        <Route path='/selection2' element={<Selection2 />} />
        <Route path='/selection2/edit/04' element={<Edit heading="04 - बदरीनाथ विधानसभा" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
