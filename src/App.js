import React, { Component } from "react";
import "./App.css";
import Forms from "./components/Forms";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: null,
      error:"" ,
      value:"",
      emailValue: "",
      telephone: "",
      selectedOption: "",
      dropdownSelect: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTeleChange = this.handleTeleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);

  }

  componentDidMount() {
    fetch("https://ansible-template-engine.herokuapp.com/form")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
       
        if (data.statusCode !== 500)
         
          this.setState({ newData: data }, () => {
           this.setState ({dropdownSelect:this.state.newData[2].default})
           
          })
          else
          throw new Error('Something went wrong Try back in sometime');
      })
      .catch((error)=>{
        this.setState({error:error.message})
      }); 
  }
  handleChange(event) {
    this.setState({ emailValue: event.target.value });
  }
  handleTeleChange(event) {
    this.setState({ telephone: event.target.value });
  }

  handleDropdownChange(event) {
    this.setState({ dropdownSelect: event.target.value });
  }
  handleSubmit(event) {
    var onSubmission = {
      label: this.state.newData[0].label,
      value: this.state.emailValue,
      isValid: true
    };

    alert("An email was submitted: " + JSON.stringify(onSubmission));
    event.preventDefault();
  }

  handleOptionChange = changeEvent => {
  
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  onNewData() {
    if (this.state.newData !== null) {
      return (
        <Forms
         
          formValue={this.state.newData}
          emailValue={this.state.emailValue}
          telephone={this.state.telephone}
          dropdownSelect={this.state.dropdownSelect}
          selectedOption={this.state.selectedOption}
          handleSubmit={this.handleSubmit}
          handleOptionChange={this.handleOptionChange}
          handleDropdownChange={this.handleDropdownChange}
          handleChange={this.handleChange}
          handleTeleChange={this.handleTeleChange}
        />
      )}
      else{
      return(
 <p> {this.state.error}
 <br/>

 </p>
 
      )}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          {this.onNewData()}
        </header>
      </div>
    );
  }
}

export default App;
