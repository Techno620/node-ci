import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "blue" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 5000);
  }
  render() {
    return (
      <>
        <div>
          <h1 className="text-center mb-4">
            Hello,Welcome to React Class Components
          </h1>
          <p className="bg-yellow-400">color :{this.state.color}</p>
        </div>
      </>
    );
  }
}

export default Welcome;
