import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props
  let location = useLocation();
  
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to=':id' className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='whishlist'/>
            </Link>
          </div>
            <div className='product-image'>
                <img src='images/watch.jpg'
                 className='img-fluid' 
                alt='product '/>
                <img src='images/watch-2.jpg'
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
              <Link>
                  <img src='images/prodcompare.svg' alt="prodcompare"/>
                 </Link>
                <Link>
                  <img src='images/view.svg' alt="view"/>
                 </Link>
                 
                 <Link>
                  <img src='images/add-cart.svg' alt="addcart"/>
                 </Link>
              </div>
            </div>
        </Link>
    </div>
     
    <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='whishlist'/>
            </Link>
          </div>
            <div className='product-image'>
                <img src='images/watch.jpg'
                 className='img-fluid' 
                alt='product '/>

                <img src='images/watch-2.jpg'
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
              <Link>
                  <img src='images/prodcompare.svg' alt="prodcompare"/>
                 </Link>
                <Link>
                  <img src='images/view.svg' alt="view"/>
                 </Link>
                 
                 <Link>
                  <img src='images/add-cart.svg' alt="addcart"/>
                 </Link>
              </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard;