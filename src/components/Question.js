import React from "react";

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = []
    }

    answers(){

    }

    componentDidMount(){
        let answers = [];
        for (let i = 0; i < this.props.answers; i++){
            answers.push(
                <input type='radio' value={i} name={`question${i}`}></input>
            )
        };
        this.setState(answers);
    }

    render(){

        return(
            <div>

            </div>
        )
    }
}

export default Question;