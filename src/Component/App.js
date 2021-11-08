import React from "react";
import Login from "./Login";
import Register from "./Register";
import Route from "./Route";
import Header from "./Header";
import MoneyTransfer from "./MoneyTransfer";
import Transfer from "./Transfer";

class App extends React.Component {
  



  render() {
    return (
      <div>
        <Header />
        <Route path="/register">
          <Register  />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/money">
          <MoneyTransfer />
        </Route>
        <Route path="/transfer">
          <Transfer  />
        </Route>
      </div>
    );
  }
}

export default App;
