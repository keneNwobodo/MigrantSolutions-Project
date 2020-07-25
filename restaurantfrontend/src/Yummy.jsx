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
                <div className="container menu-container">
                    <h2>Explore Our Menu</h2>
                 <div className="row">
                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_66_jey3p7.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>Irish COffe</h2>
                        <p className="card-text">N1200</p>
                    </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_52_1_k1ymhf.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>Yummy Yogo</h2>
                        <p className="card-text">N2000</p>
                    </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_52_i82ehg.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>Argention Cake</h2>
                        <p className="card-text">N5000</p>
                    </div>
                    </div>
                  </div>
                 </div>
                </div>

               
                 <div className="row second-row">
                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_66_1_rqrbfh.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>San Coffee</h2>
                        <p className="card-text">N1500</p>
                    </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_56_ijynqv.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>Caffe Americano</h2>
                        <p className="card-text">N1000</p>
                    </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                  <div className="card">
                    <img src="https://res.cloudinary.com/dtu2furcy/image/upload/v1595671163/migrant%20solutions%20project/Rectangle_54_fwp4q7.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h2>Filter Coffe</h2>
                        <p className="card-text">N1400</p>
                    </div>
                    </div>
                  </div>
                
                </div>
            </div>
         );
    }
}
 
export default Dishes;