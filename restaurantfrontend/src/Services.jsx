import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import './index.css';

class Services extends Component {
    constructor(){
        super()
            this.state = {
               customers: [],
               username: '',
               dishOrdered: '',
               timeOrdered: '',
               deliveryType: '',
               date: new Date()
            
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/customer')
        .then(response =>{
            if(response.data.length > 0){
                this.setState({
                    customers:response.data.map(customer => customer.username),
                    username: response.data[0].username
                })
            }
        })
    }

    changedUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    changedDish(event){
        this.setState({
            dishOrdered:event.target.value
        })
    }

    changedTimeOFOrder(event){
        this.setState({
            timeOrdered:event.target.value
        })
    }

    changedDate(date){
        this.setState({
            date: date
        })
    }
    
    onSumbit(event){
        event.preventDefault()
        const dish = {
          username:this.state.username,
          dishOrdered:this.state.dishOrdered,
          timeOrdered:this.state.timeOrdered,
          dateOrdered: this.state.dateOrdered

        }
        console.log(dish)

        axios.post('http://localhost:6000/dish/create/', dish)
        .then(response => console.log(response.data))
        window.location = '/'
    }
    render() { 
        return ( 
            <div>
                <form className="formSize" onSumbit={this.onSumbit}>
                    <label>Enter Customer Name</label><br/>
                    <select required className="form-control form-group" 
                     value={this.state.username} onChange={this.changedUsername}>
                         {this.state.customers.map(customer =>{
                             return <option key={customer} value ={customer} >{customer}</option>
                         })}

                     </select>

                     <label>Dish Ordered</label><br/>
                     <input type="text" className="form-group form-control" required
                     onChange={this.changedDish} value={this.state.dishOrdered}/>

                     <label>Time Ordered</label><br/>
                     <input type="text" onChange={this.changedTimeOFOrder} 
                     value={this.state.timeOrdered} className="form-control form-group"/>
                             
                     <div>
                     <label>Date Ordered</label>
                         <DatePicker selected = {this.state.date} onChange={this.state.changedDate}
                         className="form-group form-control" />
                     </div>

                     <div>
                        <input type="submit" className="btn btn-danger" value="Order"/>
                     </div>
                </form>
            </div>
         );
    }
}
 
export default Services;