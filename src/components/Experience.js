import React, {Component} from 'react';
import '../index.css';

class Experience extends Component{
    render(){
        return(
            <div className="experience">
                <div className="col-md-2 date">
                    {this.props.startDate}
                    <br/>
                    {this.props.endDate}
                </div>
                <div className="col-md-10 desc">
                    <h4>{this.props.position}</h4> 
                    <p>{this.props.location}</p> 
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Experience;