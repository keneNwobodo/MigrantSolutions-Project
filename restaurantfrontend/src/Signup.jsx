import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class Signup extends Component {
    constructor(){
        super()
        this.state = { 
            username: '',
            fullname: '',
            email: '',
            password: '',
            address: ''
         }
         this.changedUsername = this.changedUsername.bind(this)
         this.changedName = this.changedName.bind(this)
         this.changedEmail = this.changedEmail.bind(this)
         this.changedPassword = this.changedPassword.bind(this)
         this.changedAddress = this.changedAddress.bind(this)

    }
    changedUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changedName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    
    changedEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changedPassword(event){
        this.setState({
            password:event.target.value
        })
    }

    changedAddress(event){
        this.setState({
            address:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const customer = {
            username:this.state.username,
            fullname:this.state.fullname,
            email:this.state.email,
            password:this.state.password,
            address:this.state.address
        }

        console.log(customer)
        
        axios.post('http://localhost:6000/customer/create/', customer)   
        .then(response => console.log(response.data))

            this.setState({
                username: '',
                fullname: '',
                email: '',
                password: '',
                address: ''
        });
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aod="fade-right">
                        <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595628185/migrant%20solutions%20project/breakfast_dlvuw4.png" alt=""/>
                        </div>

                        <div className="col-md-6">
                        <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595628184/migrant%20solutions%20project/berbecue_unky5y.png" alt=""/>
                         </div>
                    </div>

                </div>
              
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Register to Order your Food Today!</h1>
                            <form onSubmit={this.onSubmit}>
                            <div>
                                <label className="text-warning">Username</label><br/>
                                <input type="text" placeholder="username" onChange={this.changedUsername} value={this.state.username} className="form-group form-control"/>
                            </div>

                            <div>
                                <label className="text-warning">Full Name</label><br/>
                                <input type="text" placeholder="name" onChange={this.changedName} value={this.state.fullname} className="form-group form-control"/>
                            </div>

                            <div >
                                <label className="text-warning">Email</label><br/>
                                <input type="email" placeholder="example@gmail.com" onChange={this.changedEmail} value={this.state.email} className="form-group form-control"/>
                            </div>

                            <div>
                                <label className="text-warning">Password</label><br/>
                                <input type="password" placeholder="password" onChange={this.changedPassword} value={this.state.password} className="form-group form-control"/>
                            </div>

                            <div>
                                <label className="text-warning">Address</label><br/>
                                <input type="text" placeholder="address" onChange={this.changedAddress} value={this.state.address} className="form-group form-control"/>
                            </div>
                            
                            <div>
                                <input type="submit" className="btn btn-warning" value="Register" />
                            </div>


                            </form>


                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default Signup;