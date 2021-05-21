import './App.css'
import './Style.css'
import Character1 from './StarWars-Characters/Character1';
import Page2 from './StarWars-Characters/Page2';
import StarWarsCharacter2 from './StarWars-Characters/StarWarsCharacter2';
import{BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Character1Info from './StarWars-Character-Details/Character1Info';
import { Page2I } from './StarWars-Character-Details/Page2I';
import FourthCharacter from './StarWars-Characters/FourthCharacter';
import FifthCharacter from './StarWars-Characters/FifthCharacter';
import StarWarsCharacter2A from './StarWars-Character-Details/StarWarsCharacter2A';
import FourthCharactern from './StarWars-Character-Details/FourthCharactern';
import FifthCharacterS from './StarWars-Character-Details/FifthCharacterS';
import Header from './Header';

function NavBar(){
  return(
    <header className="row, block, center">
    <ul>
      <li>
        <Link to="/"></Link>
      </li>
      <li>
        <Link to="/Character1Info/">Luke Skywalker</Link>
      </li>
      <li>
        <Link to="/Page2I/">C-3PO</Link>
      </li>
      <li>
        <Link to="/StarWarsCharacter2A/"> R2-D2</Link>
      </li>
      <li>
        <Link to="/FourthCharactern/">Darth Vader</Link>
      </li>
      <li>
        <Link to="/FifthCharacterS/">Leia Organa</Link>
      </li>
    </ul>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
      <Character1/>
      <Page2/>
      <StarWarsCharacter2/>
      <FourthCharacter/>
      <FifthCharacter/>
      </Route>
      <Route path="/Character1Info/">
        <Character1Info/>
  </Route>
  <Route path="/Page2I/">
<Page2I/>
  </Route>
  <Route path="/StarWarsCharacter2A/">
<StarWarsCharacter2A/>
  </Route>
  <Route path="/FourthCharactern/">
<FourthCharactern/>
  </Route>
  <Route path="/FifthCharacterS/">
<FifthCharacterS/>
  </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
