const React = require('react');
const Link = require('react-router-dom').Link
const OrderedList = require('./OrderedList');
const Navbar = require('./Navbar.jsx');
const style = require('./Resources.css');


class Home extends React.Component {

render(){
  return (
    <div>
      <Navbar/>
      <div>
        <img src="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fhome.png?v=1587280574375"/>
      </div>
    </div>
  );
  }
}
module.exports = Home;