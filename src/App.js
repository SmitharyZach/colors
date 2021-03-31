import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#ff0000",
      color2: "#00ff00",
      color3: "#0000ff",
      color4: "#ff00aa",
      color5: "#ff330a0",
      lock1: false,
      lock2: false,
      lock3: false,
      lock4: false,
      lock5: false,
    };
  }

  changeColor = (colorPosition, lockPosition) => {
    if (!this.state[lockPosition]) {
      let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ [colorPosition]: `#${randomColor1}` });
    }
  };

  changeColors = () => {
    this.changeColor("color1", "lock1");
    this.changeColor("color2", "lock2");
    this.changeColor("color3", "lock3");
    this.changeColor("color4", "lock4");
    this.changeColor("color5", "lock5");
  };

  changeLockState = (lockPosition) => {
    this.setState({
      [lockPosition]: !this.state[lockPosition],
    });
  };

  render() {
    return (
      <div className={"gridContainer"}>
        <div
          style={{ background: this.state.color1 }}
          className={"grid-item1"}
        ></div>
        <div
          style={{ background: this.state.color2 }}
          className={"grid-item2"}
        ></div>
        <div
          style={{ background: this.state.color3 }}
          className={"grid-item3"}
        ></div>
        <div
          style={{ background: this.state.color4 }}
          className={"grid-item4"}
        ></div>
        <div
          style={{ background: this.state.color5 }}
          className={"grid-item5"}
        ></div>
        <button
          onClick={() => this.changeLockState("lock1")}
          className={"button-item1"}
        >
          {this.state.lock1 ? "Unlock" : "Lock"}
        </button>
        <button
          onClick={() => this.changeLockState("lock2")}
          className={"button-item2"}
        >
          {this.state.lock2 ? "Unlock" : "Lock"}
        </button>
        <button
          onClick={() => this.changeLockState("lock3")}
          className={"button-item3"}
        >
          {this.state.lock3 ? "Unlock" : "Lock"}
        </button>
        <button
          onClick={() => this.changeLockState("lock4")}
          className={"button-item4"}
        >
          {this.state.lock4 ? "Unlock" : "Lock"}
        </button>
        <button
          onClick={() => this.changeLockState("lock5")}
          className={"button-item5"}
        >
          {this.state.lock5 ? "Unlock" : "Lock"}
        </button>
        <button
          onClick={() => this.changeLockState("lock5")}
          onClick={this.changeColors}
          className={"button-lock"}
        >
          Change Colors
        </button>
      </div>
    );
  }
}

export default App;
