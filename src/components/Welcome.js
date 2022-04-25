import React from "react";
import NDI from './NDI'
import Berg from "./Berg";
import Oswestry from "./Oswestry";
import QuickDASH from "./QuickDASH";
import Tinetti from "./Tinetti";
import UEFS from "./UEFS";

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form_type: null
        }
        this.changeForm = this.changeForm.bind(this);
        this.form = this.form.bind(this);
    }

    changeForm(e){
        this.setState({form_type: e.target.value})
    }

    form(){
        switch(this.state.form_type){
            case 'NDI':
                return <NDI/>
            case 'Berg':
                return <Berg/>
            case 'Oswestry':
                return <Oswestry/>
            case 'QuickDASH':
                return <QuickDASH/>
            case 'Tinetti':
                return <Tinetti/>
            case 'UEFS':
                return <UEFS/>
            default:
                return null
        }
    }

    render() {
        return (
        <div>
            <h1>Welcome</h1>
            <h3>Please select an outcome measure to get started</h3>
            <select onChange={this.changeForm}>
                <option disabled selected value>-- select an option --</option>
                <option>NDI</option>
                <option>UEFS</option>
                <option>QuickDASH</option>
                <option>Oswestry</option>
                <option>Berg</option>
                <option>Tinetti</option>
            </select>
            {this.form()}
        </div>
        )
    }
}

export default Welcome;