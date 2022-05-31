import React from "react";

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            answers: []
        }
    }

    componentDidMount(){
        let answers = [];
        let questionNum = parseInt(this.props.label.split(' ')[1]) // Take the 1 index of the question number array to have a reference to that specific question
        for (let i = 0; i < this.props.numAnswers; i++){
            answers.push(
                <label>{this.props.min + i}
                    <input type='radio' value={this.props.min + i} name={this.props.name} onChange={(e) => this.props.updateInput(questionNum, e)}></input>
                </label>
            )
        };
        this.setState({answers: answers});
    }

    render(){
        return(
            <div>{this.props.label}:
                <br/>
                {this.state.answers} 
            </div>
        )
    }
}

export default Question;