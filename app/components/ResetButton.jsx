const React = require("react");

class ResetButton extends React.Component{
  render() {
    return(
      <div>
        <button onClick={this.props.resetTime}>Reset</button>
      </div>
    );
  }
}

module.exports = ResetButton;