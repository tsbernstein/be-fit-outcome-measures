import React from "react";

class Berg extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            total: 0
        }

        this.updateTotal = this.updateTotal.bind(this);
    }

    calculate() {

    }

    updateTotal(e){

    }

    render() {
        return(
            <div>
                <input type='number' defaultValue={0} onChange={this.updateTotal}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
                <input type='number' defaultValue={0}/>
            </div>
        )
    };
};

export default Berg;