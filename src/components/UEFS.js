import React from "react";
import Question from "./Question";

class UEFS extends React.Component{
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
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0
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
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0,
                14: 0,
                15: 0,
                16: 0,
                17: 0,
                18: 0,
                19: 0
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

    render() {
        return(
            <form onSubmit={this.calculate}>
                <Question numAnswers={5} min={0} name='question-1' label='Question 1' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-2' label='Question 2' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-3' label='Question 3' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-4' label='Question 4' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-5' label='Question 5' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-6' label='Question 6' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-7' label='Question 7' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-8' label='Question 8' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-9' label='Question 9' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-10' label='Question 10' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-11' label='Question 11' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-12' label='Question 12' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-13' label='Question 13' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-14' label='Question 14' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-15' label='Question 15' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-16' label='Question 16' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-17' label='Question 17' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-18' label='Question 18' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-19' label='Question 19' updateInput={this.updateInput}/>
                <Question numAnswers={5} min={0} name='question-20' label='Question 20' updateInput={this.updateInput}/>
                <button>Calculate</button>
                {(this.state.total === 0) ? null : <div>UEFS Score: {(this.state.total / 80) * 100}</div>}
                {(this.state.total === 0) ? null : <div>MCR Rating: {100 - ((this.state.total / 80) * 100)}</div>}                <button onClick={this.reset}>Reset</button>
            </form>
        )
    };
}

export default UEFS;