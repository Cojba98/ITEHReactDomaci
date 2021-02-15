import './App.css';
import React, {useState, Component, useEffect} from 'react';
import Shop from './Pages/Shop';
import Order from './Pages/Order';
import {Route, Redirect} from "react-router-dom";

const LOCAL_STORAGE_KEY = "products-in-cart";

 class App extends Component{

   state = {
     products: [],
     cart: [],
     page: 'products',
     url: 'http://localhost:8000/api/proizvodi',
     redirect: false
   }

backToShopCart = () =>{
  this.setState({
    redirect:true
  })
 
  
}

potvrdiPorudzbinu = () =>{
this.setState({
  cart:[],
  redirect: true
})
alert("Porudzbina je uspesno sacuvana");
}

isprazniKorpu = () =>{
  this.setState({
    cart:[]
  })
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

getProducts = async() => {
  fetch(this.state.url)
  .then(res => res.json())
  .then( json=> {
    this.setState({
      products: json.data
    })
  });

};

render(){

  this.getProducts();
  if(this.state.redirect===false){
  return (
<div clasName="App">
  <Route exact path="/" render ={(props) => <Shop stanje={this.state}/>}/>
<Route exact path="/narucivanje" render ={(props) => <Order stanje={this.state} backToShopCart={this.backToShopCart} isprazniKorpu={this.isprazniKorpu} potvrdiPorudzbinu={this.potvrdiPorudzbinu}/>}/>
</div>

  );
}

if(this.state.redirect===true){
  this.setState({
    redirect:false,
    page: "cart"
  })
  return(
  <Redirect to="/"/>
  )
}
}
 }
export default App;
