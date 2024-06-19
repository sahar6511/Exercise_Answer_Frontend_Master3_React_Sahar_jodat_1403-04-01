import React, { Component } from 'react';
import '../styles/sass/main.scss'

class Product extends Component {
    render() { 
        const{src,title,price,desc, changeHeartColor} = this.props;
        return (
  
            <div className='product-box'>
                <img src={src} alt={src}/>
                <h3>{title}</h3>
                <h2>{price}$</h2>
                <p>{desc}</p>
                <i className="fa fa-heart" onClick={(event)=>changeHeartColor(event)}></i>
            </div>
          );
    }
}
 
export default Product;