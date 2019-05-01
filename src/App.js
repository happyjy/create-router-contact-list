import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <h1>My Contacts</h1>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/contacts" component={Contacts} />
      </header>
    );
  }
}

const Welcome = () => <h1>Wlcome to the best contact app!</h1>;

const Contacts = ({match}) => (
  <div>
    <ul>
      <li><Link to="/contacts/Jyoon">Jyoon</Link></li>
      <li><Link to="/contacts/SoEun">SoEun</Link></li>
      <li><Link to="/contacts/Nomad">Nomad</Link></li>
    </ul>

    <Route
      exact
      path={`${match.path}`}
      render={()=><h3>Please select a contat</h3>} />

    <Route path={`${match.path}/:contactName`} component={Detail} />
  </div>
)

// const Contacts = ({match}) => console.log(match);

const Detail = ({match}) => `Your friends name is ${match.params.contactName}`;

// const App = () => {
//   <div>
//     <Header></Header>
//   </div>
// };

// const Header = () => {
//   <header>
//     <h1>My Contacts</h1>
//   </header>
// };

// console.log("### working ? react-router-contact-list");

export default App;