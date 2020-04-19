const React = require('react');
const Style = require('./WhatToDoItem.css')

class WhatToDoItem extends React.Component {

render(){
  return (
    <div>
      <h1 class-name="title">{this.props.title}</h1>
      <h2 class-name="cost">{this.props.cost}</h2>
      <a target="_blank" class-name="link" href={this.props.link}>{this.props.linktext}</a>
      <p class-name="desc">{this.props.desc}</p>
    </div>
  );
  }
}
module.exports = WhatToDoItem;