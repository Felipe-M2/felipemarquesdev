import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './Portfolio/Portfolio';
import PagePortfolio from './Portfolio/PagePortfolio/PagePortfolio';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/felipemarquesdev" exact Component={Portfolio} />
          <Route path="/felipemarquesdev/projeto" Component={PagePortfolio} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
