import React, { Component } from 'react';

class Yummies extends Component {
    
    render() { 
        return ( 
            <div>
                <table className="table">
                    <thead className="thead-warning" >
                        <tr>
                            <td>{this.props.dish.username}</td>
                            <td>{this.props.dish.dishOrdered}</td>
                            <td>{this.props.dish.timeOrdered}</td>
                            <td>{this.props.dish.deliveryType}</td>
                            <td>{this.props.dish.date}</td>
                        </tr>
                    </thead>
                </table>

                <td>
                    <button type="button" className="btn btn-warning" href="#" className="btn btn-danger" onClick={()=>{
                        this.props.deleteDish(this.props.dish._id)
                    }}>Delete</button>
                </td>
            </div>
         );
    }
}
 
export default Yummies;