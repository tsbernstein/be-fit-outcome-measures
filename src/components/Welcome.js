import React from "react";

class Welcome extends React.Component {
    render() {
        return (
        <div>
            <h1>Welcome</h1>
            <h3>Please select an outcome measure to get started</h3>
            <select>
                <option disabled selected value>-- select an option --</option>
                <option>NDI</option>
                <option>UEFS</option>
                <option>QuickDASH</option>
                <option>Oswestry</option>
                <option>Berg</option>
                <option>Tinetti</option>
            </select>
        </div>
        )
    }
}

export default Welcome;