import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
  return (
    <>
     <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img 
              src='images/main-banner-1.jpg' 
              className='img-fluid rounded-3' 
              alt='main banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>Sicormore trees</h5>
                <p>From Ksh 2000 or Ksh 300/tree</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center' >
              <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-01.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>Sicormore trees</h5>
                  <p>From Ksh 2000 <br/> or Ksh 300/tree</p>
                  
                </div>
            </div>
            <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-02.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Sicormore trees</h5>
                  <p>From Ksh 2000 <br/> or Ksh 300/tree</p>
                  
                </div>
            </div>
            <div className='small-banner position-relative '>
                <img    
                src='images/catbanner-03.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>Buy Duma Here!</h5>
                  <p>From Ksh 2000 <br/> or Ksh 300/tree</p>
                  
                </div>
            </div>

            <div className='small-banner position-relative '>
                <img    
                src='images/catbanner-04.jpg' 
                className='img-fluid rounded-3' 
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>Buy Duma Here!</h5>
                  <p>From Ksh 2000 <br/> or  Ksh 300/tree</p>
                  
                </div>
            </div>
            

            </div>


          </div>
        </div>
      </div>
     </section>

     <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
                <div className='services d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service.png' alt='services'/>
                    <div>
                      <h6>Free Shipping</h6>
                      <p className='mb-0'>From all orders over 1000</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-02.png' alt='services'/>
                    <div>
                      <h6>Daily Suprise Offers</h6>
                      <p className='mb-0'>Save upto 25% off</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-03.png' alt='services'/>
                    <div>
                      <h6>Support 24/7</h6>
                      <p className='mb-0'>Shop with an expert</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-04.png' alt='services'/>
                    <div>
                      <h6>Affordable Prices</h6>
                      <p className='mb-0'>Get Factory Default Prices</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-05.png' alt='services'/>
                    <div>
                      <h6>Secure Payments</h6>
                      <p className='mb-0'>100% Protected Payment</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
     </section>

     <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>viscorsor</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Annual vinnica</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>vinnica</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Asteroceae</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>viscorsor</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Annual vinnica</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>vinnica</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt="camera"/>
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Asteroceae</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt="camera"/>
                </div>
                


              </div>
            </div>
          </div>
        </div>
     </section>

     <section className='featured-wrapper py-5 home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'> Featured Collection</h3>
            </div>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           
           
          </div>
        </div>
     </section>

     <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/apple12.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5>French Apples</h5>
                <h6>Smart Watch Bags</h6>
                <p>From Ksh 300 or  ksh20.02/mo. for 24.mo</p>
              </div>
              
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/orange 2.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>French Oranges</h5>
                <h6 className='text-dark'>Smart Watch busckets</h6>
                <p className='text-dark'>From Ksh 100 or  ksh20.02/mo</p>
              </div>
                
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/pexels-teona-swift-6913818.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>French Oranges</h5>
                <h6 className='text-dark'>Smart Watch busckets</h6>
                <p className='text-dark'>From Ksh 100 or  ksh20.02/mo</p>
              </div>
                
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/pexels-cottonbro-studio-4503747.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Monstera with lush</h5>
                <h6 className='text-dark'>Assorted potted Nephrolepis </h6>
                <p className='text-dark'>From Ksh 100 or  ksh20.02/mo</p>
              </div>
                
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Special Product
            </h3>
          </div>
        </div>
        <div className='row '>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>

      </div>
     </section>

     <section className='popular-wrapper py-5 home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          
          </div>
          <div className='row'>
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
     </section>


     <section className='marque-wrapper py-5'>
       <div className='container-xxl'>
        <div className='row'>
          <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand'/>
              </div>
            </Marquee>
          </div>
        </div>
       </div>

     </section>

    

     <section className='blog-wrapper  home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'> Our latest Blogs</h3>
            </div>
           
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            
          </div>
        </div>
     </section>
    </>
  )
}

export default Home