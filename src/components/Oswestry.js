import React from "react";
import Question from "./Question";

class Oswestry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputs: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0
            },
            total: 0
        }
        this.updateInput = this.updateInput.bind(this);
        this.calculate = this.calculate.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset(e){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.checked = false)
        )
        this.setState({            
            inputs: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0
            },
            total: 0
        })
    }

    calculate(e) {
        e.preventDefault()
        let inputs = Object.entries(this.state.inputs)
        let result = 0
        inputs.forEach(input => {
            result += input[1]
        })
        this.setState({total: result})
    }

    updateInput(num, e){
        let parsedInput = parseInt(e.target.value)
        let inputs = {...this.state.inputs}
        if (Number.isInteger(parsedInput)) {
            inputs[num] = parsedInput
        }
        this.setState({inputs: inputs})
    }

    handleFocus(e) {
        e.target.select()
    }

    render(){
        return(
            <form onSubmit={this.calculate}>
                <Question numAnswers={6} name='question-1' label='Question 1' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-2' label='Question 2' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-3' label='Question 3' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-4' label='Question 4' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-5' label='Question 5' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-6' label='Question 6' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-7' label='Question 7' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-8' label='Question 8' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-9' label='Question 9' updateInput={this.updateInput}/>
                <Question numAnswers={6} name='question-10' label='Question 10' updateInput={this.updateInput}/>
                
                <button>Calculate</button>
                {(this.state.total === 0) ? null : <div>{this.state.total * 2}% disability</div>}
                <button onClick={this.reset}>Reset</button>
            </form>
        )
    }
}

export default Oswestry