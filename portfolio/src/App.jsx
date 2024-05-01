import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './Portfolio/Portfolio';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/felipemarquesdev" exact Component={Portfolio} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
