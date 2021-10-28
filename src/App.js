import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddEvents from './pages/AddEvents/AddEvents';
import Homepage from './pages/Home/HomePage/Homepage';
import Login from './pages/Login/Login';
import RegAsVolunteer from './pages/RegAsVolunteer/RegAsVolunteer';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Homepage></Homepage>
            </Route>
            <Route path='/home'>
              <Homepage></Homepage>
            </Route>
            <Route path='/addEvents'>
              <AddEvents></AddEvents>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/regAsVolenteer'>
              <RegAsVolunteer></RegAsVolunteer>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
