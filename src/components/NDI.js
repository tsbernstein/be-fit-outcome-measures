import React from "react";
import Question from "./Question";

class NDI extends React.Component{
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
                9: 0,
                10: 0,
                11: 0,
                12: 0,
                13: 0
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
                {/* <div className='question' onChange={(e) => this.updateInput(0, e)}>Question 1:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-1'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-1'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-1'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-1'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-1'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-1'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(1, e)}>Question 2:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-2'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-2'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-2'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-2'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-2'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-2'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(2, e)}>Question 3:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-3'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-3'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-3'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-3'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-3'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-3'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(3, e)}>Question 4:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-4'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-4'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-4'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-4'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-4'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-4'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(4, e)}>Question 5:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-5'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-5'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-5'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-5'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-5'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-5'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(5, e)}>Question 6:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-6'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-6'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-6'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-6'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-6'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-6'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(6, e)}>Question 7:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-7'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-7'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-7'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-7'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-7'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-7'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(7, e)}>Question 8:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-8'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-8'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-8'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-8'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-8'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-8'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(8, e)}>Question 9:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-9'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-9'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-9'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-9'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-9'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-9'/>
                    </label>
                </div>
                <div className='question' onChange={(e) => this.updateInput(9, e)}>Question 10:
                <br/>
                    <label>0
                    <input type='radio' value='0' name='question-10'/>
                    </label>
                    <label>1
                    <input type='radio' value='1' name='question-10'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='question-10'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='question-10'/>
                    </label>
                    <label>4
                    <input type='radio' value='4' name='question-10'/>
                    </label>
                    <label>5
                    <input type='radio' value='5' name='question-10'/>
                    </label>
                </div> */}
                <button>Calculate</button>
                {(this.state.total === 0) ? null : <div>{this.state.total}</div>}
                <button onClick={this.reset}>Reset</button>
            </form>
        )
    }
}

export default NDI;