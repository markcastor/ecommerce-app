import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import Container from '../components/Container'

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}/>
      <BreadCrumb title="Compare Products"/>
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src="images/cross.svg"
                 alt="cross" 
                 className="position-absolute cross img-fluid" 
                 />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Polo Shirt Polo Blank Embroidered High Quality Camisas Polyester</h5>
                  <h6 className="price mb-2 mt-3">Ksh 1000</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>

              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img 
                src="images/cross.svg"
                 alt="cross" 
                 className="position-absolute cross img-fluid" 
                 />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">Polo Shirt Polo Blank Embroidered High Quality Camisas Polyester</h5>
                  <h6 className="price mb-2 mt-3">Ksh 1000</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color/>
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>

              </div>
            </div>
          </div>
        </Container>
    
    </>
  )
}

export default CompareProduct