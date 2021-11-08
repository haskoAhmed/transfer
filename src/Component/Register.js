import React from "react";
import { onTermSubmit } from "../API/signup";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      phoneNum: "",
      role: 1,
      data: null,
    };
  }

  async onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    await onTermSubmit(this.state)
      .then(({ data, status }) => {
        if (status < 300 || status >= 200) alert("success");
        else alert("failed");
      })
      .catch((err) => alert(err));
  }
  render() {
    return (
      <div>
        <div
          className="ui segment"
          style={{ display: "block", alignItems: "center", border: "none" }}
        >
          <h4>Register</h4>
          <p>personal information</p>
        </div>

        <form
          onSubmit={(e) => this.onFormSubmit(e)}
          className="ui form"
          style={{ paddingLeft: "10px" }}
        >
          <div className="ui filed" style={{ width: "50%" }}>
            <label>full name</label>
            <input
              value={this.state.fullName}
              onChange={(e) => this.setState({ fullName: e.target.value })}
              type="text"
              required
            />
          </div>
          <div className="ui filed" style={{ width: "50%" }}>
            <label>E-mail</label>
            <input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              required
            />
          </div>
          <div className="ui filed" style={{ width: "50%" }}>
            <label>password</label>
            <input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              required
            />
          </div>
          <div className="ui filed" style={{ width: "50%" }}>
            <label>phone number</label>
            <input
              value={this.state.phoneNum}
              onChange={(e) => this.setState({ phoneNum: e.target.value })}
              type="number"
              required
            />
          </div>
          <div className="ui filed" style={{ width: "50%" }}>
            <label>role</label>
            <input type="number" />
          </div>
          <a href="/">
            <button
              style={{ marginTop: "10px" }}
              class="ui button"
              //onClick={this.onFormSubmit.bind(this)}
              type="submit"
            >
              register
            </button>
          </a>
        </form>
      </div>
    );
  }
}

export default Register;
