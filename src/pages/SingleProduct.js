/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'

import {TbGitCompare} from "react-icons/tb";
import {AiOutlineHeart} from "react-icons/ai";
import Container from '../components/Container';

const SingleProduct = () => {
    const props = {
        width: 500, 
        height: 600,
         zoomWidth: 600,
          img: "https://thumbs.dreamstime.com/b/fruit-2999796.jpg"};
    // eslint-disable-next-line no-unused-vars
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={"Product Name"}/>
     <BreadCrumb title="Product Name"/>
     <Container class1="main-product-wrapper py-5 home-wrapper-2 ">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                        <div><img src="https://thumbs.dreamstime.com/b/fruit-2999796.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thumbs.dreamstime.com/b/fruit-2999796.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thumbs.dreamstime.com/b/fruit-2999796.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thumbs.dreamstime.com/b/fruit-2999796.jpg" className='img-fluid' alt="" /></div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className='border-bottom'>
                            <h3 className='title'>
                                Kids Headphones Bulk 10 pack Multi Coloured
                            </h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className="price">Ksh 100</p>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>(2 Reviews) </p>
                            </div>
                            <a className='review-btn' href="#review">Write a Review</a>
                        </div>
                        <div className=" py-3">
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Type:</h3><p className='product-data'>Apples</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand:</h3><p className='product-data'>Grocery</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category:</h3><p className='product-data'>Fruits</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Tags:</h3><p className='product-data'>Apples</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Availability:</h3><p className='product-data'>In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size:</h3>
                                <div className="d-flex fle-wrap gap-15">
                                    <span className="badge border-1 bg-white text-dark border border-secondary">S</span>
                                    <span className="badge border-1 bg-white text-dark border border-secondary">M</span>
                                    <span className="badge border-1 bg-white text-dark border border-secondary">XL</span>
                                    <span className="badge border-1 bg-white text-dark border border-secondary">XXL</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Color:</h3>
                                <Color />
                            </div>
                            <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                                <h3 className='product-heading'>Quantity:</h3>
                                <div>
                                    <input type="number" name='' min={1} max={10} className='form-control' style={{width: "70px"}} id='' />
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                <button className='button border-0' type='submit'>Add to Cart</button>
                                <button className='button signup'>Buy it Now</button> 
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href=""> <TbGitCompare className='fs-5 me-2'/> Add to Compare</a>
                                </div>
                                <div>
                                    <a href=""> <AiOutlineHeart className='fs-5 me-2'/> Add to Whishlist</a>
                                </div>

                            </div>
                            <div className='d-flex gap-10 flex-column  my-3'>
                                <h3 className='product-heading'>Shipping & Returns:</h3>
                                <p className='product-data'>Free shipping and returns available on all orders! <br />
                                we shipping all US domestic orders within <b>5-10 business days!</b></p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-3'>
                                <h3 className='product-heading'>Product Link:</h3>
                                
                                <a 
                                    // eslint-disable-next-line no-script-url
                                    href="javascript:void(0);"
                                    onClick={() => {
                                    copyToClipboard(" https://thumbs.dreamstime.com/b/fruit-2999796.jpg ")
                                }}>Copy product Link  </a>

                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
     </Container>
     <Container className="description-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12 ">
                <h4>Description</h4> 
                    <div className='bg-white p-3'>
                    
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dignissimos nulla necessitatibus 
                         eligendi aperiam. Dolorum molestias 
                         corporis suscipit ex quia quae explicabo
                          et vero. Corrupti possimus veritatis
                           saepe, quas veniam officiis.s
                    </p>
                    </div>
                </div>
            </div>
     </Container>

     <Container  className="reviews-wrapper  home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h4 id='review' >Reviews</h4> 
                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className='mb-2'>Customer Review</h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                        {
                            orderedProduct && (
                                <div>
                            <a className='text-dark text-decoration-underline' href="/">Write a Review</a>
                        </div>
                            )
                        }
                    </div>
                    <div  className="review-form py-4">
                    <h4>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15 '>
                                    
                                <div>
                                <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={true}
                                activeColor="#ffd700"
                            />
                                </div>
                                <div>
                                <textarea
                                name=""
                                    id="" 
                                    className='w-100 form-control'
                                    placeholder='Comments' 
                                cols="30" 
                                rows="4"></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                <button className="button border-0">Submit Review</button>
                                </div>
                            </form>
                    </div>
                    <div className="reviews mt-4">
                        <div className="review ">
                            <div className="d-flex gap-10 align-items-center">
                                <h6 className='mb-0'>Castro</h6>
                                <ReactStars
                                count={5}
                                value={4}
                                size={24}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            </div>
                            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequuntur consequatur voluptatum molestias rerum rem ea qui reprehenderit exercitationem optio temporibus soluta necessitatibus voluptate magnam, quod eius eos distinctio sed.</p>

                        </div>
                    </div>
                    </div>

                </div>
            </div>

     </Container>
     
     <Container className='popular-wrapper py-5 home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          
          </div>
          <div className='row'>
            
            <ProductCard/>
            
          </div>
     </Container>
    </>
  )
}

export default SingleProduct