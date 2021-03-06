import React, {Component} from 'react';

class Product extends Component{

handleAddToChart = () =>{
this.props.addToChart(this.props.product);
}

render(){

    const product = this.props.product;

    return(
        <div className="product">
        <h4>Naziv proizvoda:{product.nazivProizvoda}</h4>
        <h5>Kategorija:{product.kategorija}</h5>
        <h5>Proizvodjac:{product.proizvodjac}</h5>
        <h5>Velicina:{product.velicina}</h5>
        <h5>Cena {product.cena} din</h5>
        <button className="btnDodaj" onClick={this.handleAddToChart}>Dodaj u korpu</button>
        </div>

    )
}

}
export default Product;