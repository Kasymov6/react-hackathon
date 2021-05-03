import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";

const ProductDetails = (props) => {
  const { getProductDetails, productDetails } = useContext(productContext);
  const id = props.match.params.id;
  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div>
      <div>
        <div className="wraper">
          <div className="container">
            <div className="main-left">
              <div className="main-box">
                {productDetails ? (
                  <>
                    <h1>{productDetails.title}</h1>
                    <p className="box-desc">{productDetails.description}</p>
                    <img src={productDetails.img} alt="product-img" />
                    <h2>{productDetails.subTitle}</h2>
                    <p className="box-desc">
                      {productDetails.secondDescription}
                    </p>
                    <img src={productDetails.secondImg} />
                    <p>{productDetails.price}$</p>
                  </>
                ) : (
                  "details"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;