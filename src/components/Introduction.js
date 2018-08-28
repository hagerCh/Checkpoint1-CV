import React, {Component} from 'react';
import '../index.css';

class Introduction extends Component{
    render(){
        return(
            <div className="introduction">
                <h1> {this.props.name} </h1>
                <h3> {this.props.work} </h3>
                <img src ={this.props.url} alt="Profile pic" className="image"/>
            </div>
        );
    }
}

export default Introduction;