import React, {Component} from 'react';

class Product extends Component{

handleAddToChart = () =>{
this.props.addToChart(this.props.product);
}

render(){

    const product = this.props.product;

    return(
        <div className="product">
        <h4>{product.nazivProizvoda}</h4>
        <h5>{product.velicina}</h5>
        <h5>{product.cena}</h5>
        <button className="btnDodaj" onClick={this.handleAddToChart}>Dodaj u korpu</button>
        </div>

    )
}

}
export default Product;