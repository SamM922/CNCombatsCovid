const React = require("react");

class TimerInput extends React.Component {
  render() {
    return (
      <div>
        <h1>Select how long you want to spend on the task.</h1>
        <input type="number" min="0" max="100000" value={this.props.minutes} onChange={this.props.handleChange} placeholder="Enter # of minutes"/>
      </div>
    );
  }
}

module.exports = TimerInput;
