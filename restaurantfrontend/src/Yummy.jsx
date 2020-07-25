import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Yummies from './Yummies';

class Dishes extends Component {
    constructor() {
        super()
        this.state = { 
            dishes: []
         }
         
    }

    componentDidMount(){
        axios.get('http://localhost:6000/dish/')
        .then(response =>{
            this.setState({
                dishes:response.data
            })
        })
    }

    deleteDish(id){
        axios.delete('http://localhost:6000/dish/'+id)
        .then(response =>  console.log(response.data))
        this.setState({
            dishes:this.state.dishes.filter(searchanddel => searchanddel._id !==id)
        })
    }
    
    dishKitchen(){
        return this.state.dishes.map(singleDish =>{
            return <Yummies dish ={singleDish} deleteDish={this.deleteDish} key={singleDish._id} />
        })
    }
    render() { 
        return ( 
            <div>
              <table className="table">
                  <thead className="thead-dark">
                    <tr>
                        <th>Customer's Username</th>
                        <th>Dish Ordered</th>
                        <th>Time Ordered</th>
                        <th>Date Ordered</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.dishKitchen()}
                  </tbody>
              </table>
              
            </div>
         );
    }
}
 
export default Dishes;