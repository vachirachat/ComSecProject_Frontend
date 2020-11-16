import logo from './logo.svg';
import Login from './page/loginpage';
import Blogpage from './page/blogpage';
import Blogedit from './page/blogedit';
import Navbar from './component/Navbar';
import Blogview from './page/blogview';
import userReducer from './redux/userReducer';
import NewBlogpage from './page/Newblogpage';
import { createStore } from 'redux'
import  {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const store = createStore(userReducer)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route path='/createblog' component={NewBlogpage} />
          <Route path='/allblog' component={Blogpage} />
          <Route path='/blog/:id' component={Blogview}/>
          <Route path='/blogedit/:id' component={Blogedit} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
