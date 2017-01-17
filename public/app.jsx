//using uppercase is norm for components
//react.createClass() is the most common method. takes
//only one argument, an options object
//all the render method expects is some JSX
//code to be displayed to browser
var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
});

//React.DOM is how we kick off react stuff
ReactDOM.render(
  ,
  document.getElementById('app')
);
