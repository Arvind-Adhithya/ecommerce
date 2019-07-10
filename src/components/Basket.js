import React, { Component } from 'react';
import util from '../util';
class Basket extends Component{
    render()
    {
        const {cartItems} = this.props;
        return(
            <div className="alert alert-info">
                {cartItems.length===0?"Empty Basket":
                <div>You have {cartItems.length} products in basket.<hr/></div>}
                {cartItems.length > 0 &&
                <div>
                    <ul style={{marginLeft: -25}}>
                        {cartItems.map(item=> (
                            <li key={item.id}>
                                <b>
                                    {item.title}
                                </b>
                                -X- {item.count}={item.price*item.count}
                                <button style={{float:'right'}}className="btn btn-danger btn-xs" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                <br/>
                            </li>))}
                    </ul>
                    Total: {util.formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                    </div>

                
                }
                <button className="btn btn-primary" onClick={()=>alert("Checkout needs to implement...")}>Checkout</button>
            </div>
        )
    }
}

export default Basket;