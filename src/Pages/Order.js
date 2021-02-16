import './../App.css';
import React, {useState, Component, useEffect} from 'react';
import Product from './../Components/Product';
import CartProduct from './../Components/CartProduct';
import Header from './../Header';

const LOCAL_STORAGE_KEY = "products-in-cart";

function validateForm(){

    

    var b = document.getElementById("iime").style.display = "none";
    var b = document.getElementById("iprezime").style.display = "none";
    var b = document.getElementById("ikontakt").style.display = "none";
    var b = document.getElementById("iadresa").style.display = "none";
    var b = document.getElementById("imesto").style.display = "none";
    var b = document.getElementById("iposta").style.display = "none";
    var b = document.getElementById("imejl").style.display = "none";

    var valid = true;
    console.log("validacija");
    var a = document.getElementById("fime").value;
    if(a===""){
    alert("Unesite vrednosti u sva polja");
    var b = document.getElementById("iime").style.display = "grid";
    return false;
    }
    var a = document.getElementById("fprezime").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("iprezime").style.display = "grid";
        return false;
    }
    var a = document.getElementById("fmesto").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("imesto").style.display = "grid";
        return false;
    }
    var a = document.getElementById("fposta").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("iposta").style.display = "grid";
        return false;
    }
    var a = document.getElementById("fmejl").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("imejl").style.display = "grid";
        return false;
    }
    var a = document.getElementById("fkontakt").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("ikontakt").style.display = "grid";
        return false;
    }

    var a = document.getElementById("fadresa").value;
    if(a===""){
        alert("Unesite vrednosti u sva polja");
        var b = document.getElementById("iadresa").style.display = "grid";
        return false;
    }

    return valid;
    
}

class Order extends Component {

    userData;

    state={
        products: this.props.stanje.products,
        cart: this.props.stanje.cart,
        url: this.props.stanje.url,
        page: this.props.stanje.page
      }

    componentDidMount(){
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


      handlePotvrdi = () => {
        if(this.state.cart.length===0){
            alert("Vasa korpa je prazna");
        return false;
        }
        if( validateForm())
          this.props.potvrdiPorudzbinu();
      }

render(){
    
    return(
        <div>
            <Header number={this.state.cart.length} goToChart={this.props.backToShopCart}/>
            
            <div className="orderInfo">
                <div className="orderForm">
                <form >
                    <label for="fname">Ime:</label><br/>
                    <input type="text" name="fname" id="fime"/><br/>
                    <h5 id="iime">Unesite ime!</h5>
                    <label for="fname">Prezime:</label><br/>
                    <input type="text" name="fname" id="fprezime"/><br/>
                    <h5 id="iprezime">Unesite prezime!</h5>
                    <label for="fname">Mesto:</label><br/>
                    <input type="text" name="fname" id="fmesto"/><br/>
                    <h5 id="imesto">Unesite mesto!</h5>
                    <label for="fname">Postanski broj:</label><br/>
                    <input type="text" name="fname" id="fposta"/><br/>
                    <h5 id="iposta">Unesite postanski broj!</h5>
                    <label for="fname">Adresa:</label><br/>
                    <input type="text" name="fname" id="fadresa"/><br/>
                    <h5 id="iadresa">Unesite adresu!</h5>
                    <label for="fname">Kontakt telefon:</label><br/>
                    <input type="text" name="fname" id="fkontakt"/><br/>
                    <h5 id="ikontakt">Unesite kontakt telefon!</h5>
                    <label for="fname">Imejl adresa:</label><br/>
                    <input type="text" name="fname" id="fmejl"/><br/>
                    <h5 id="imejl">Unesite adresu!</h5>

                    
                </form>
                <button className="btnPoruci" value="" onClick={this.handlePotvrdi}>Potvrdi porudzbinu</button>
                </div>
            </div>
            </div>
        
    )
}

}

export default Order;