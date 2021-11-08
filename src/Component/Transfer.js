import React from "react";
import { onTermSubmit } from "../API/money";

class Transfer extends React.Component {
  state = {
    cash: "",
  };
  onTransferMoney(e) {
    e.preventDefault();
    console.log(this.state);
    onTermSubmit(this.state);
  }
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={(e) => this.onTransferMoney(e)}>
          <div className="ui field">
            <label>cash</label>
            <input
              value={this.state.cash}
              onChange={(e) => this.setState({ cash: e.target.value })}
              type="number"
              style={{ width: "50%", display: "block" }}
            />
            <button className="ui button" style={{ marginTop: "10px" }}>
              confirm
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Transfer;
