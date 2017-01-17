//using uppercase is norm for components
//react.createClass() is the most common method. takes
//only one argument, an options object
//all the render method expects is some JSX
//code to be displayed to browser
var Greeter = React.createClass({
  render: function() {
    //this.props stores our props!
    //make sure this.props.name that 'name' part equals the attribute
    //in your reactDOM.render attribute
    var theName = this.props.name;
    return (
      <div>
        <h1>Hello {theName}!</h1>
        <p>So far this is alright</p>
      </div>
    );
  }
});

//React.DOM is how we kick off react stuff
ReactDOM.render(
  //adding a prop! actually passing a prop to our component. this
  //one is 'name'
  <Greeter name="Andrew"/>,
  document.getElementById('app')
);
