import React from "react";
import {  onTermSubmit } from "../API/confirm";

class Login extends React.Component {
  state = {
    mail: "",
    pass: "",
  };
  async onLoginSubmit(e) {
    e.preventDefault();
    console.log(this.state);
   await onTermSubmit(this.state)
   .then(({status}) => {
     if (status > 300 || status >= 200) alert("success")
     else alert ("fail")
   })
   .catch ((err) => alert(err))
  }

  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={(e) => this.onLoginSubmit(e)}
          style={{ padding: "50px", display: "block", alignItems: "center" }}
        >
          <div className="ui field" style={{ width: "30%" }}>
            <label>E-mail</label>
            <input
              type="email"
              value={this.state.male}
              onChange={(e) => this.setState({ mail: e.target.value })}
              required
            />
          </div>
          <div className="ui field" style={{ width: "30%" }}>
            <label>Pass Word</label>
            <input
              type="password"
              value={this.state.pass}
              onChange={(e) => this.setState({ pass: e.target.value })}
              required
            />
          </div>
          <a href="/register">
            <button
              class="ui button"
            //    onClick={this.onLoginSubmit.bind(this)}
              type="submit"
            >
              login
            </button>
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
