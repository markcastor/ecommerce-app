import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";

import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCard = (props) => {
  const {grid} = props;
  console.log(grid);
  let location = useLocation();
  
  return (
    <>
      <div className={`${
        location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <img src={wish} alt='whishlist'/>
            </button>
          </div>
            <div className='product-image'>
                <img src={watch}
                 className='img-fluid' 
                alt='product '/>
                <img src={watch2}
                 className='img-fluid' 
                alt='product '/>
            </div>
            <div className='product-details'>
              <h6 className='brand'> Havels</h6>
              <h5 className='product-title'>
                Kidds head phones bul 10 pack multimodal colored
              </h5>
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad . </p>
              <p className='price'>Ksh 100.00</p>

            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                  <img src={prodcompare} alt="prodcompare"/>
                 </button>
                <button className='border-0 bg-transparent'>
                  <img src={view} alt="view"/>
                 </button>
                 
                 <button className='border-0 bg-transparent'>
                  <img src={addcart} alt="addcart"/>
                 </button>
              </div>
            </div>
        </Link>
    </div>
     

    <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}>
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <img src={wish} alt='whishlist'/>
            </button>
          </div>
            <div className='product-image'>
                <img src={watch}
                 className='img-fluid' 
                alt='product '/>

                <img src={watch2}
                 className='img-fluid' 
                alt='product '/>
            </div>
            <div className='product-details'>
              <h6 className='brand'> Havels</h6>
              <h5 className='product-title'>
                Kidds head phones bul 10 pack multimodal colored
              </h5>
              <ReactStars
                count={5}
                value={3}
                size={24}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad . </p>
              <p className='price'>Ksh 100.00</p>

            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                  <img src={prodcompare} alt="prodcompare"/>
                 </button>
                <button className='border-0 bg-transparent'>
                  <img src={view} alt="view"/>
                 </button>
                 
                 <button className='border-0 bg-transparent'>
                  <img src={addcart} alt="addcart"/>
                 </button>
              </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard;