const React = require('react');    

class TimerStart extends React.Component{
  render() {
    return (
      <div style = {{marginBottom: 10}}>
        <button onClick={this.props.startCountDown}>Start</button>
      </div>
    );
  }
}
module.exports = TimerStart;