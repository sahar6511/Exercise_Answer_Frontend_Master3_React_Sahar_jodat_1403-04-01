import React, { Component } from "react";
import Product from "./Product";
import food1 from "../images/productimages/food1.png";
import food2 from "../images/productimages/food2.png";
import food3 from "../images/productimages/food3.png";
import food4 from "../images/productimages/food4.png";
import "../styles/sass/main.scss";

class Products extends Component {
  constructor() {
    super();
    this.headerRef = React.createRef();
    this.productContainerRef = React.createRef();
    this.state = {
      flag: true,
      products: [
        {
          id: 1,
          imgsrc: food1,
          title: "product_1",
          price: 230,
          desc: (
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              inventore iste ad a quisquam minima enim repudiandae!
            </>
          ),
        },
        {
          id: 2,
          imgsrc: food2,
          title: "product_2",
          price: 410,
          desc: (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              fugit cum. Necessitatibus eligendi animi error.
            </>
          ),
        },
        {
          id: 3,
          imgsrc: food3,
          title: "product_3",
          price: 32,
          desc: (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              tempore doloribus. Iure eligendi ad ut quae incidunt? Corrupti,
              quam suscipit!
            </>
          ),
        },
        {
          id: 4,
          imgsrc: food4,
          title: "product_4",
          price: 75,
          desc: (
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quam delectus iusto, ipsa ullam ad eaque adipisci odit excepturi
              consectetur quis nemo sequi tempore minima.
            </>
          ),
        },
      ],
    };
  }

  changeFlagStatus = () => {
    this.setState({ flag: !this.state.flag }, this.changeHeader);
  };

  // change header style
  changeHeader = () => {
    const element = this.headerRef.current.classList;
    if (element.contains("header-after-click")) {
      element.remove("header-after-click");
    } else {
      element.add("header-after-click");
    }
  };

  //change color of heart on click
  changeHeartColor = (event) => {
    let element = event.target;
    if (element.classList.contains("red-color")) {
      element.classList.remove("red-color");
    } else {
      element.classList.add("red-color");
    }
  };

  render() {
    return (
      <div className="flex-direction-column">
        <div
          className="header"
          ref={this.headerRef}
          onClick={this.changeFlagStatus}
        >
          <p>Digital products</p>
          <div>
            <i className="fa  fa-angle-up"></i>
          </div>
        </div>

        <div
          className={
            this.state.flag
              ? " products-container active"
              : "products-container"
          }
        >
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              src={product.imgsrc}
              title={product.title}
              price={product.price}
              desc={product.desc}
              changeHeartColor={this.changeHeartColor}
            ></Product>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
