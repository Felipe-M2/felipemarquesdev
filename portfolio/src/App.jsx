import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import PagePortfolio from './Portfolio/PagePortfolio/PagePortfolio';
import LoguinAdmin from './Portfolio/LoguinAdmin/LoguinAdmin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/felipemarquesdev" exact Component={Portfolio} />
        <Route path="/felipemarquesdev/projeto" exact Component={PagePortfolio} />
        <Route path="/felipemarquesdev/admin" exact Component={LoguinAdmin} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
