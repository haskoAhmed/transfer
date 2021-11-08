import React from "react";
import { onTermSubmit } from "../API/transfer";

class MoneyTransfer extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    phoneNum: "",
    role: 1,
    data: null,
    userId:2,
    loading: false,
  };

  async onTransferForm(e) {
    this.setState({ loading: true });
    e.preventDefault();
    console.log(this.state);
    await onTermSubmit(this.state)
    .then (({status,data}) => {
      if (status > 300 || status >=200) alert("success")
      else alert("fail")
    }).catch((err) => alert(err))
    //this.setState({false})
  }
  
  
  
  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={(e) => {
            this.onTransferForm(e);
          }}
        >
          <div className="ui segment">
            <h4 className="ui header">اضافة عميل</h4>
            <label>اسم المستفيد</label>
            <input
              value={this.state.fullName}
              onChange={(e) => this.setState({ fullName: e.target.value })}
              type="text"
            />
            <label>email</label>
            <input
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
            />
             <label>password</label>
             <input
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
            />
             <label>phone Number</label>
             <input
              value={this.state.phoneNum}
              onChange={(e) => this.setState({ phoneNum: e.target.value })}
              type="number"
            />
            <button className="ui button" onClick={this.onBtnClick}>
              اضافة{" "}
            </button>
          </div>
        </form>
        {/* <div>
        {this.state.loading ? <p>{this.state.name}</p> : <></>}
        </div> */}
      </div>
    );
  }
}

export default MoneyTransfer;
