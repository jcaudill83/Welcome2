
import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import GameDisplay from "./GameDisplay"
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {catagory: {}},
      score: 0,
      formData: {
        answer:""
      }
    }
    
  }
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData: {
      answer: event.target.value} });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let score = this.state.score
    if (this.state.formData.answer === this.state.data.answer){

      this.setState({
        score: score += this.state.data.value
      })
    } else {
      this.setState({
        score: score -= this.state.data.value
      })
    }
  this.getNewQuestion()
  }


  
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    if (this.state.submitted) {
      return (
          <div className="Contact">
              <p>{this.state.formData.answer}</p>
              
          </div>
      )
  }

     
      
    return (
      <div>
        <GameDisplay
          question = {this.state.data.question}
          value = {this.state.data.value}
          catagory = {this.state.data.category}
        />
        
        <strong>User Score: </strong> {this.state.score}
        <form onSubmit ={this.handleSubmit}>
          <input
          onChange ={this.handleChange}
          value = {this.state.formData.answer}
          />
          <button>Submit</button>
        </form>
        
      </div>
    );
  }
}
export default Jeopardy;