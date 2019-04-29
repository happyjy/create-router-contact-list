import React, {Component} from "react";

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
      </header>
    );
  }
}

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