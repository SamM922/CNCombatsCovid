const React = require("react");
const Timer = require("./Timer");
const TimerInput = require("./TimerInput");
const TimerStart = require("./TimerStart");
const ResetButton = require("./ResetButton");
const Navbar = require("./Navbar.jsx");

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
class OrderedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00", // responsible for the seconds
      minutes: "0", // responsible for the minutes
      task: []
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);

    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.pushTask = this.pushTask.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + sec
      });
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      alert("Time's up! Move on to the next task!");
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  pushTask() {
    let taskList = this.state.task;
    taskList.push(document.getElementById("task").value);
    this.setState({
      task: taskList
    });
  }

  resetTime() {
    clearInterval(this.intervalHandle);
    this.setState({
      minutes: 0,
      seconds: "00"
    })
    
  }

  render() {
    const taskList = this.state.task.map(task => {
      return <li>{task}</li>;
    });
    return (
      <div>
        <Navbar />
        <h1>Priorities List</h1>
        <p>
          During these times of isolation and being away from school, it's
          important to stay organized to know what to do for your activities.
          Enter a list of tasks for yourself for the day and the amount of time
          you want for it!
        </p>
        <ol>{taskList}</ol>
        <input placeholder="Enter task here!" id="task" />
        <button onClick={this.pushTask}>Put on list</button>

        <h1>Timer</h1>
        <TimerInput minutes={this.state.minutes} handleChange={this.handleChange} />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <TimerStart startCountDown={this.startCountDown} />
        <ResetButton resetTime={this.resetTime} />
      </div>
    );
  }
}

module.exports = OrderedList;
