var GreeterMessage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Some h1</h1>
        <p>para whatever</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;

    if(name.length > 0) {
      this.refs.name.value = '';
    }
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="text" ref="age" />
          <button>Set Age</button>
        </form>
      </div>
    );
  }
});

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
      //name is the prop name. the value (onthe right) is the
      name: 'React',
      message: 'default prop derp derp'
    };
  },
  //built in React Method
  getInitialState: function() {
    return {
      //name is the prop name. the value (onthe right) is the
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    //creating a var for this to make it easier
    var nameRef = this.refs.name;

    //this represents the DOM node
    var nameInput = nameRef.value;

    //this sets the input to blank after user submits
    nameRef.value = '';

    if(typeof nameInput==='string' && nameInput.length > 0) {
      this.setState({
        //name is the prop name. the value (onthe right) is the var name
        name: nameInput
      });
    }

  },
  render: function() {
    //this.props stores our props!
    //make sure this.props.name that 'name' part equals the attribute
    //in your reactDOM.render attribute
    //notice the ref attr? we use it to save a reference to our input
    //field.
    //We then changed this.props.name to this.state.name.
    //in order re-render the state, we call setState above
    var theName = this.state.name;


    var theMessage = this.props.message;
    return (
      <div>
        <h1>Hello {theName + ' from user input'}!</h1>
        <p>So far this is {theMessage}</p>

        <GreeterMessage />

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>

        <GreeterForm/>
      </div>
    );
  }
});

//how to pass other types into props
//just like below!
var firstName = 'matt from a variable';

//here you can get user input!
//var userName = prompt('what is it');

//React.DOM is how we kick off react stuff
ReactDOM.render(
  //adding a prop! actually passing a prop to our component. this
  //one is 'name'
  <Greeter message="message from the ReactDOM render. not the best way" />,
  document.getElementById('app')
);

//props get passed into a component as you initialize it
//state is internally maintained and updated by component. component
//shouldn't update the prop but should update it's own state
//
