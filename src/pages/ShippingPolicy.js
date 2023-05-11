import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const ShippingPolicy = () => {
  return (
    <>
        <Meta title={"Shipping Policy"}/>
     <BreadCrumb title="Shipping Policy"/>
     <div className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">

                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ShippingPolicy