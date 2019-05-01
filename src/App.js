import React, {Component} from "react";
import { Route } from "react-router-dom";
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
        <Route exact path="/" component={Welcome} />
        <Route path="/contacts" component={contacts} />
      </header>
    );
  }
}

// class Welcome extends Component {
//   render() {
//     return (
//       <h1>Wlcome to the best contact app!</h1>
//     );
//   }
// }

const Welcome = () => <h1>Wlcome to the best contact app!</h1>;

const contacts = () => (
  <ul>
    <li>Jyoon</li>
    <li>SoEun</li>
    <li>HAHA</li>
  </ul>
)

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

console.log("### working ? react-router-contact-list");

export default App;