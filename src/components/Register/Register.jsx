import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from '../../utils/withRouter';

class Register extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    user =
     {
        first_name : "",
        last_name:"",
        email:"",
        password:"",
    }
    getformData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user);
         
     }
     sendData = async (e)=> 
     {
        e.preventDefault()
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup",this.user)
       console.log(data);
     }
    render() {
        console.log(this.props);

        return (
            <div className='w-50 mx-auto my-5'  >
                <form onSubmit={this.sendData}>
                    <input onChange={this.getformData} name="firstname" type="text" placeholder="Enter first name" className="form-control mt-3" />
                    <input onChange={this.getformData} name="secondname" type="text" placeholder=" secondname" className="form-control mt-3" />
                    <input onChange={this.getformData} name="email" type="text" placeholder="Enter email" className="form-control mt-3" />
                    <input onChange={this.getformData} name="password" type="text" placeholder="Enter password" className="form-control mt-3" />
                        <div className='d-flex justify-content-center'>
                        <button className="btn btn-info float-right mt-3"  >Register</button>
                        </div>
                </form>

                 
            </div>
            
        );
    }
}

export default withRouter(Register);