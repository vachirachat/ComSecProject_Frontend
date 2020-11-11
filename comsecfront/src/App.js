import logo from './logo.svg';
import Login from './page/loginpage';
import Blogpage from './page/blogpage';
import Blogedit from './page/blogedit';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/blog' component={Blogpage} />
          <Route path='/blogedit' component={Blogedit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
