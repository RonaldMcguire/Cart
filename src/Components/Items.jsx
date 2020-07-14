// calculate each item

// export default class Items extends Component {


import React, { Component } from 'react'

class Items extends Component{
    constructor(){
        super();

        this.state ={
            item: [
                {
                    name: "nuggets",
                    quantity: 0,
                    price: 5
                    
                },
                {
                    name: "supreme wallet",
                    quantity: 0,
                    price: 500
                    
                },
            ],
            cartSubTotal: 0,
            tax: 0.06,
            total: 0


        }
    }

addQuantity = index => {
    this.setState(
        {
    quantity: this.state.item[index].quantity++
        }
    )
}

subQuantity = index => {
    this.setState(
        {
    quantity: this.state.item[index].quantity--
        }
    )
}




    
render(){ 

    let nuggets = this.state.item[0];
    let wallet = this.state.item[1];
    let sum = nuggets.quantity + wallet.quantity
    let nugQuant = nuggets.quantity;
    let walletQuant = wallet.quantity;
    

    let CartSubTotal = (nugQuant * nuggets.price) + (walletQuant * wallet.price)

    let tax = CartSubTotal * this.state.tax;
    let total = tax * CartSubTotal
    return (
        <div className="wrapper">

            <div className = "items">

                <div className = "firstItem">
                    {nuggets.name} ${nuggets.price}
                    <br></br>
                    <br></br>
                    <button onClick ={() => {this.subQuantity(0)}} > - </button>
                    {nuggets.quantity}
                    <button onClick ={() => this.addQuantity(0)} > + </button>
                    <br></br>
                    
                
                </div>
                
                <div className="secondItem">
                <br></br>
                {wallet.name} ${wallet.price}
                <br></br>
                <br></br>
                <button onClick ={() => this.subQuantity(1)} > - </button>
                {wallet.quantity}
                <button onClick ={() => this.addQuantity(1)} > + </button>
                <br></br>
                
                    
                </div>
            </div>
            <div className = "checkOut">
                {sum} items
                <br></br>
                <br></br>
                subtotal: ${CartSubTotal}
                <br></br>
                Estimated Tax: {tax}
                <br></br>
                Total: {total}

        </div>
        </div>


    )
    }
}

export default Items;