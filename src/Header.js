import './Header.css';
import React, {useState, Component, useEffect} from 'react';
import App from './App';




class Header extends Component{

handleGoToCart = () => {
    this.props.goToChart();
}
    
render(){
    return(
        <div className="header">
            <div className="leftHeader">
            <h1>SuperSport.com</h1>
            </div>
            <div className ="rightHeader">
            <button className="korpa" onClick={this.handleGoToCart}><img className="slikaKorpe" src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"/></button>
            <p>{this.props.number}</p>
            </div>
        </div>
    

    )
}
}



export default Header;