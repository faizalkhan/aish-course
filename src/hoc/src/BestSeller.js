import React from 'react'

export const Hoc = (BestSellerComponent) => {


    
    return (props) => {


        return (

            <div>
            <p className="best-seller-tag">Best seller</p>

            <BestSellerComponent {...props} />
            </div>
          )
    }


}


