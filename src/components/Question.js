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
        let questionNum = parseInt(this.props.name.split('-')[1]) // Take the 1 index of the question number array to have a reference to that specific question
        for (let i = 0; i < this.props.numAnswers; i++){
            answers.push(
                <div className="answer-container">
                    <label className="answer-label">{this.props.min + i}
                    <br/>
                        <input className='answer' type='radio' value={this.props.min + i} name={this.props.name} onChange={(e) => this.props.updateInput((questionNum - 1), e)}></input>
                    </label>
                </div>
            )
        };
        this.setState({answers: answers});
    }

    render(){
        return(
            <div className="question-container">
                <div className="question">{this.props.label}:
                    <br/>
                    {this.state.answers} 
                </div>
            </div>
        )
    }
}

export default Question;