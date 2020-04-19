const React = require('react');
const ResourceStyle = require("./Resource-Box.css");

class ResourceBox extends React.Component{
  render(){
    return (
      <div className="resource-box">
        <h1 className="box-title">{this.props.title}</h1>
        <img className="img" src={this.props.image}/>
        <p className="box-p">{this.props.description}</p>
      </div>
    );
  }
}

module.exports = ResourceBox;        