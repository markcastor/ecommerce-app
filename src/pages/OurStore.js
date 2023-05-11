import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
    
  return (
    <>
    <Meta title={"Our Store"}/>
     <BreadCrumb title="Our Store"/>
     <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By Categories</h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Plants</li>
                                <li>Herbicides</li>
                                <li>Suppliments</li>
                                <li>Fruits</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
                        <div>
                            <h5 className='sub-title'>Availability</h5>
                            <div>
                                <div className="form-check">
                                    
                                    <input type="checkbox" className="form-check-input" name="" id="" value="" />
                                    <label className="form-check-label" htmlFor="">
                                    in Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    
                                    <input type="checkbox" className="form-check-input" name="" id="" value="" />
                                    <label className="form-check-label" htmlFor="">
                                    Out of Stock (0)
                                    </label>
                                </div>
                            </div>
                            <h5 className='sub-title'>Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                            <div className="form-floating ">
                                <input 
                                 type="email" 
                                 className="form-control"
                                 id="floatingInput" 
                                 placeholder="From"/>
                                <label htmlFor="floatingInput">From</label>
                            </div>
                            <div className="form-floating ">
                                <input 
                                 type="email" 
                                 className="form-control"
                                 id="floatingInput1" 
                                 placeholder="To"/>
                                <label htmlFor="floatingInput">To</label>
                            </div>
                            </div>
                            <h5 className='sub-title'>Colors</h5>
                            <div >
                                <Color/>
                            </div>
                            <h5 className='sub-title'>Size</h5>
                            <div>
                            <div className="form-check">
                                    
                                    <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    name="" 
                                    id="color-1" 
                                    value="" />
                                    <label className="form-check-label" htmlFor="color-1">
                                    S (2)
                                    </label>
                                </div> 
                            <div className="form-check">
                                
                                <input 
                                type="checkbox" 
                                className="form-check-input" 
                                name="" 
                                id="color-2" 
                                value="" />
                                <label className="form-check-label" htmlFor="color-2">
                                M (2)
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Flowers
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Trees
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Candle nuts
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Fruits
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    apple
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Herbicides
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Product</h3>
                        <div>
                            <div className="random-products mb-3 d-flex">
                                <div className="w-50">
                                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                </div>
                                <div className="w-50">
                                    <h5>
                                        Kids watch bulk multi coloured for student
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                        
                                    <b >Ksh 100.00</b>
                                </div>
                            </div>
                            
                            <div className="random-products d-flex">
                                <div className="w-50">
                                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                </div>
                                <div className="w-50">
                                    <h5>
                                        Kids watch bulk multi coloured for student
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                        
                                    <b >Ksh 100.00</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className='col-9'>
                    <div className="filter-sort-grid mb-4">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="d-flex align-items-center gap-10">
                                
                                <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By:</p>
                                <select name="" id="" className="form-control form-select">
                                    
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">
                                            Best Selling
                                        </option>
                                        <option value="title-ascending">
                                            Alphabetically, A-Z                                            
                                        </option>
                                        <option value="title-descending">
                                            Alphabetically, Z-A                                            
                                        </option>
                                        <option value="price-ascending">
                                            Price, low to high                                           
                                        </option>
                                        <option value="price-descending">
                                            Date, old to new                                             
                                        </option>

                                    
                                </select>
                            
                        </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className="totalproducts mb-0" st>21 Products</p>
                                <div className='d-flex gap-10 align-items-center grid'>
                                
                                
                                
                                <img  
                                onClick={() => {
                                    setGrid(3);
                                }} 
                                src="images/gr4.svg" 
                                alt="grid" 
                                className="d-block img-fluid" />

                                <img  
                                onClick={() => {
                                    setGrid(4);
                                }} 
                                src="images/gr3.svg" 
                                alt="grid" 
                                className="d-block img-fluid" />
                                <img  
                                onClick={() => {
                                    setGrid(6);
                                }} 
                                src="images/gr2.svg" 
                                alt="grid" 
                                className="d-block img-fluid" />
                                <img  
                                onClick={() => {
                                    setGrid(12);
                                }} 
                                src="images/gr.svg" 
                                    alt="grid" 
                                    className="d-block img-fluid" />

                                </div>


                        </div> 
                    </div>
                
                        
                    </div> 
                        <div className="product-list pb-5">
                            <div className="gap-10 d-flex flex-wrap ">
                                <ProductCard grid={grid}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default OurStore