import './../App.css';
import React, {useState, Component, useEffect} from 'react';
import Product from './../Components/Product';
import CartProduct from './../Components/CartProduct';
import App from './../App';
import Header from './../Header';
import { Redirect } from 'react-router-dom';

class Shop extends Component {

  state={
    products: this.props.stanje.products,
    cart: this.props.stanje.cart,
    url: this.props.stanje.url,
    page: this.props.stanje.page
  }

    userData;

    constructor(props){
        super(props);

        this.onChangeCart = this.onChangeCart.bind(this);   
    }

    onChangeCart(e) {
        this.setState({cart: e.target.value})
    }


getProducts = async() => {
  fetch(this.state.url)
  .then(res => res.json())
  .then( json=> {
    this.setState({
      products: json.data
    })
  });

};
  

  addToChart = (product)=>{
    <Redirect to='/narucivanje'/>
    console.log('Dodato u korpu, naziv:' + product.name);
    
    this.state.cart.push({ ...product});

    this.setState({
      cart: this.state.cart
     })
     try{
        const serial = JSON.stringify(this.state);
        localStorage.setItem('state', serial);
      }catch(e){
          console.log(e);
      }
console.log("Broj elemenata u korpi:" + this.state.cart.length);
  };

  removeFromCart = (product)=>{
    console.log('Izbaceno iz korpe, naziv:' + product.nazivProizvoda);
    
    const korpa = this.state.cart.filter((pr)=> pr!==product);
    this.setState({
      cart: korpa
     })
console.log("Broj elemenata u korpi:" + this.state.cart.length);
  };

   changePage = (nextPage) => {
     this.setState({
      page: nextPage
     })
   };

   goToChart = () =>{
    this.setState({
      page: "cart"
     })
   };

   backToShop = () =>{
    this.setState({
      page: 'products'
     })
   };

   emptyCart = () =>{
    this.setState({
      cart: []
     })
   }

  renderProducts = () =>{
    
    return (
      <div>
      <Header number={this.state.cart.length} goToChart={this.goToChart}/>
    <div className="App" >
      {this.state.products.map(pr=>(
        <Product product ={pr} addToChart={this.addToChart}/>
        
      ))}
      </div>
    </div>
    );
  }




  renderCart = () =>{
    return (
      <div>
        <Header number={this.state.cart.length} goToChart={this.goToChart}/>
        <div className = "nazadNaKupovinu">
        <button className="kupovina" onClick={this.backToShop}>Nazad na kupovinu</button>
        </div>
    <div className="App">
      
      
      {this.state.cart.map(pr=>(
        <CartProduct product ={pr} removeFromCart={this.removeFromCart}/>
      ))}
    </div>

        <div className="bottom">
        <button className = "ispraznikorpu" onClick={this.emptyCart}>Isprazni korpu</button>
        <button className = "narucivanje"><a href = "http://localhost:3000/narucivanje">Poruci</a></button>
        </div>

    </div>
    );
  }

  componentDidMount(){
    this.getProducts();
    this.userData = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')){
        this.setState({
            cart: this.userData.cart
        })
    }else{
        this.setState({
            cart:[]
        })
    }

  }

  componentWillUpdate(nextProps, nextState){
      localStorage.setItem('user', JSON.stringify(nextState));
  }


  render(){
    
    
    <Header/>
      if(this.state.page==='products'){
      return(

      this.renderProducts()
      )
  }
      if(this.state.page==='cart'){
      return(
      this.renderCart()
      )
      }
    }
}
export default Shop;