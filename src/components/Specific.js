import React, {Component} from 'react';
import Experience from './Experience';
import Education from './Education'; 
import '../index.css';

class Specific extends Component{
    render(){
        return(
            <div className="specific">
                <p> In anim irure ea fugiat ipsum incididunt.Amet duis. <br/>
                    Dolore Lorem eaullamco eu duis non. Magna esse ullamco. <br/>
                    Commodo non anim incididunt ad elit reprehenderit eu consectetur nisi id.<br/>
                    Commodo dolor officia amet consectetur laborum excepteur incididunt. <br/>
                    Consequat aute deserunt est elit dolor ex nostrud nostrud do commodo quis ad.<br/>
                </p>
                 <h2> Experience </h2>
                 <Experience startDate="03/2018" endDate="Present" position="Freelancer" location="Upwork.com" description="Freelancer in web development"/> 
                 <Experience startDate="09/2018" endDate="Present" position="Member" location="Junior Entreprise" description="Active member"/> 
                 <Experience startDate="09/2017" endDate="Present" position="Chair" location="Google Club" description=""/>   
                 <h2> Education </h2>
                 <Education startDate="09/2009" endDate="06/2016" school="Pioneer school" major="Graduated with honors"/>
                 <Education startDate="09/2016" endDate="05/2021" school="Higher Institute of Applied Science and Technology of Sousse (ISSAT Sousse)" major="Software Engineering"/>
            </div>
        );
    }
}

export default Specific;