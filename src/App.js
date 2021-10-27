import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddEvents from './pages/AddEvents/AddEvents';
import Homepage from './pages/Home/HomePage/Homepage';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Homepage></Homepage>
          </Route>
          <Route path='/addEvents'>
            <AddEvents></AddEvents>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
