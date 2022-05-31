import React from "react";
import Question from "./Question";
import Tinetii1 from "./Tinetti1";
import Tinetii2 from "./Tinetti2";

class Tinetii extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
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
            <div>
                <Tinetii1/>
                <Tinetii2/>
            </div>
        )
    };
}

export default Tinetii;