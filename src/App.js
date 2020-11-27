import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favourites from './components/notes/Favourites';
import NotesDetail from './components/notes/NotesDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/note/:id' component={NotesDetail} />
        <Route path='/editform/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
