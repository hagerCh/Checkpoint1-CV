import React, {Component} from 'react';
import '../index.css';

class Skills extends Component{
    render(){
        const CStyle= {
            width: this.props.Cprogress
        }
        const JAVAStyle= {
            width: this.props.JAVAprogress
        }
        const HTMLStyle= {
            width: this.props.HTMLprogress
        }
        return(
         <div className="skills">   
            <h4>C/C++</h4> 
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={CStyle}> 
                </div>
            </div>
            <div>
                <h4>Java</h4>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={JAVAStyle}> 
                </div>
            </div>
            <div>
                <h4>HTML5/CSS3</h4>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={HTMLStyle}> 
                </div>             
            </div>
          </div>
        );
    }
}

export default Skills;