import React, { Component } from 'react';

class Yummies extends Component {
    
    render() { 
        return ( 
            <div>
                <table className="table">
                    <thead className="thead-dark" >
                        <tr>
        <td>{this.props.dish.username}</td>
        <td>{this.props.dish.dishOrdered}</td>
        <td>{this.props.dish.timeOrdered}</td>
        <td>{this.props.dish.dateOrdered}</td>
                        </tr>
                    </thead>
                </table>

                <td>
                    <a href="#" className="btn btn-danger" onClick={()=>{
                        this.props.deleteDish(this.props.dish._id)
                    }}>Delete</a>
                </td>
            </div>
         );
    }
}
 
export default Yummies;