import React, {Component} from 'react';
import '../index.css';

class Education extends Component{
    render(){
        return(
            <div className="education">
                <div className="col-md-2 date">
                    {this.props.startDate}
                    <br/>
                    {this.props.endDate}
                </div>
                <div className="col-md-10 desc">
                    <h4>{this.props.school}</h4> 
                    <p>{this.props.major}</p>  
                </div>
            </div>
        );
    }
}

export default Education;