import React,{Component} from 'react';
import Signup from './user/signup';
import "./css/SForm.css";
import "./js/script";

class SubmitData extends Component{

    render(){
        return(
            <React.Fragment>  
            
            <Signup />
        </React.Fragment>
        );
    }
}

export default SubmitData;