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
        for (let i = 0; i < this.props.numAnswers; i++){
            answers.push(
                <label>{i}
                    <input type='radio' value={i} name={this.props.name}></input>
                </label>
            )
        };
        this.setState({answers: answers});
    }

    render(){
        // const answers = this.state.answers.forEach(answer => {
        //     answer
        // })
        // console.log(this.state.answers)
        return(
            <div>{this.props.label}:
                <br/>
                {this.state.answers}
            </div>
        )
    }
}

export default Question;