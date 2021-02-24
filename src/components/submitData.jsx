import React,{Component} from 'react';
import Signup from './user/signup';

class SubmitData extends Component{

    render(){
        return(
            <section id="signup">
                <div className="mt-10">
                    <Signup />
                </div>
            </section>
           
        );
    }
}

export default SubmitData;