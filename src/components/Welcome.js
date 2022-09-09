import React from "react";
import NDI from './NDI'
import Berg from "./Berg";
import Oswestry from "./Oswestry";
import QuickDASH from "./QuickDASH";
import Tinetti from "./Tinetti";
import UEFS from "./UEFS";
import LEFS from "./LEFS";
import WOMAC from "./WOMAC";
import './surveys.css'

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
            case 'LEFS':
                return <LEFS/>
            case 'WOMAC':
                return <WOMAC/>
            default:
                return null
        }
    }

    render() {
        return (
        <div className="app-container">
            <div className="welcome-container">
                <h1>Welcome</h1>
                <h3>Please select an outcome measure to get started</h3>
            </div>
            <div className="drop-down-container">
                <select className="drop-down" onChange={this.changeForm}>
                    <option disabled selected value>-- select an option --</option>
                    <option>Berg</option>
                    <option>NDI</option>
                    <option>Oswestry</option>
                    <option>QuickDASH</option>
                    <option>Tinetti</option>
                    <option>UEFS</option>
                    <option>LEFS</option>
                    <option>WOMAC</option>
                </select>
            </div>
            {this.form()}
        </div>
        )
    }
}

export default Welcome;