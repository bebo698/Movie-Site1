import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "../../utils/withRouter";
 

export default withRouter(class Login extends Component {
    
    state = {errorMessage:""}
    user =
        {
            email: "",
            password: "",
        }
    getformData = (e) => {
        this.user[e.target.name] = e.target.value;
    }
    sendData =async (e) => {
        console.log("lol")
        e.preventDefault()

        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user)
        if (data.message === "success") {
            localStorage.setItem("token",data.token)
            this.props.navigate("/home")
        }
         else 
         {
            this.setState({
            errorMessage:data.message
        })
         }

     }

    render() {
        const myHookValue = this.props.myHookValue;
        console.log(myHookValue)

        return (
            <>

            <div className="w-75 mx-auto my-5">
                <form onSubmit={this.sendData}>
                    <input onChange={this.getformData} name="email" type="text" placeholder="Enter email" className="form-control mt-3" />
                    <input onChange={this.getformData} name="password" type="text" placeholder="Enter password" className="form-control mt-3" />
                    <button className="btn btn-info  float-right mt-3">Login</button> 
                   <div className="d-flex justify-content-center my-5" > {this.state.errorMessage} </div>

                </form>


            </div>
            </>
        )
    }
});