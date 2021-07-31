import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Videos from './pages/video/Videos';
import Home from './pages/home/Home';


const App = () => {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Switch>

          
          <Route path='/video'>
            <Videos/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>

        </Switch>
      </div>
    
    </BrowserRouter>
   );  
}

export default App;
