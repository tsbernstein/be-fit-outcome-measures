import React from "react";

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
            <form>
                <div>
                    <label>1
                    <input type='radio' value='1' name='test1'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='test1'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='test1'/>
                    </label>
                </div>
                <div>
                    <label>1
                    <input type='radio' value='1' name='test'/>
                    </label>
                    <label>2
                    <input type='radio' value='2' name='test'/>
                    </label>
                    <label>3
                    <input type='radio' value='3' name='test'/>
                    </label>
                </div>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(0, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(1, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(2, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(3, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(4, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(5, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(6, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(7, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(8, e)}/>
                <input type='number' defaultValue={0} onClick={this.handleFocus} onChange={(e) => this.updateInput(9, e)}/>
            </form>
        )
    }
}

export default NDI;