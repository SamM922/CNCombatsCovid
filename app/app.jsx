const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;
const Style = require("./default.css");

/* Import Components */
const List = require('./components/OrderedList');
const Home = require('./components/Home');
const Resources = require('./components/Resources.jsx');
const WhatToDo = require('./components/WhatToDo.jsx')


ReactDOM.render(
  (<BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/Priorities-List" component={List}/>
      <Route path="/Solving-Boredom" component={WhatToDo}/>
    </div>
  </BrowserRouter>), document.getElementById('main')
);