import React, {Component} from 'react';
import Introduction from './Introduction';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import '../index.css';

class General extends Component{
    render(){
        return(
            <div className="general">
                 <Introduction name="Hager Chaabane" work="Software engineering student" url="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/29792899_2017301515265036_3043165788485118667_n.jpg?_nc_cat=0&oh=251909d1f0acdf149fc0c0a1bf6374fe&oe=5BFC8802"/>
                 <h2> Personal Info </h2>
                 <PersonalInfo adress="Manzel Chaker, Sfax, Tunisia" phone="54833096" email="hagerchaabane1@gmail.com" dateBirth="23/12/1997" linkedin="https://www.linkedin.com/in/hager-chaabane-7b2478130/"/>
                 <h2> Skills </h2>
                 <Skills Cprogress="80%" JAVAprogress="70%" HTMLprogress="99%"/>
            </div>
        );
    }
}

export default General;