//using uppercase is norm for components
//react.createClass() is the most common method. takes
//only one argument, an options object
//all the render method expects is some JSX
//code to be displayed to browser
var Greeter = React.createClass({
  //getDefaultProps allows us to specify default values for props
  //so that if a prop accidentally isn't specifed/provided, then
  //the default prop will provide the 'default' value you specify
  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },
  render: function() {
    //this.props stores our props!
    //make sure this.props.name that 'name' part equals the attribute
    //in your reactDOM.render attribute
    var theName = this.props.name;
    return (
      <div>
        <h1>Hello {userName}!</h1>
        <p>So far this is alright</p>
      </div>
    );
  }
});

//how to pass other types into props
//just like below!
var firstName = 'matt';

//here you can get user input!
var userName = prompt('what is it');

//React.DOM is how we kick off react stuff
ReactDOM.render(
  //adding a prop! actually passing a prop to our component. this
  //one is 'name'
  <Greeter />,
  document.getElementById('app')
);
