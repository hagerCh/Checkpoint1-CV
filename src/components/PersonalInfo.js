import React, {Component} from 'react';
import '../index.css';

class PersonalInfo extends Component{
    render(){
        return(
            <div className="personalInfo">
                <h4>Adress:
                    <br/>
                    {this.props.adress}
                </h4>
                <h4>Phone:
                    <br/>
                    +216 {this.props.phone}
                </h4>
                <h4>E-mail:
                    <br/>
                    {this.props.email}
                </h4>
                <h4>Date of birth:
                    <br/>
                    {this.props.dateBirth}
                </h4> 
            </div>
        );
    }
}

export default PersonalInfo;