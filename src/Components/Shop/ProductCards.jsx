import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from '../Home/Ratings'

const ProductCards = ({ GridList, products }) => {
    // console.log(products);
    return (
        <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
            {
                products.map((product, i) => (
                    <div key={i} className='col-lg-4 col-md-6 col-12'>
                        <div className="product-item">

                            {/* Product Images */}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                {/* Product action link */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                    <Link to={`/cart-page`}><i className="icofont-cart-alt "></i></Link>

                                </div>
                            </div>

                            {/* product Content */}
                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className="productRating">
                                    <Ratings />
                                </p>
                                <h6>$ {product.price}</h6>
                            </div>
                        </div>
                        <div className="product-list-item">

                            {/* Product Images */}
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                {/* Product action link */}
                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                                    <a href="#">
                                        <i className="icofont-heart"></i>
                                    </a>
                                    <Link to={`/cart-page`}><i className="icofont-cart-alt "></i></Link>

                                </div>
                            </div>

                            {/* product Content */}
                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className="productRating">
                                    <Ratings />
                                </p>
                                <h6>$ {product.price}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProductCards
