import React from "react";

class Berg extends React.Component {
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
                13: 0
            },
            total: 0
        }

        this.updateInput = this.updateInput.bind(this);
        this.calculate = this.calculate.bind(this);
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

    render() {
        return(
            <form onSubmit={this.calculate}>
                <div onChange={(e) => this.updateInput(0, e)}>Question 1: 
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
                </div>
                {/* <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(0, e)}/> */}
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(1, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(2, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(3, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(4, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(5, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(6, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(7, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(8, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(9, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(10, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(11, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(12, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(13, e)}/>
                <button>Calculate</button>
                {(this.state.total === 0) ? null : <div>{this.state.total}</div>}
            </form>
        )
    };
};

export default Berg;