import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../PageHeader'
// import productData from '../../products.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const SingleProduct = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))

    }, [])

    const result = product.filter((p, i) => p.id === id)

    return (
        <div>
            <PageHeader title={'OUR SHOP SINGLE'} curPage={`Shop / Single Product`} />

            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Left Side */}
                        <div className="col-lg-8 col-12">
                            <div className="product-details">
                                <div className="row align-item-center">
                                    <div className="col-md-6 col-12">
                                        <div className="product-thumb">
                                            <div className="swiper-container pro-single-top">
                                                <Swiper className="mySwiper"
                                                    spaceBetween={30}
                                                    slidesPerView={1}
                                                    loop={'true'}
                                                    autoplay={{
                                                        delay: 2000,
                                                        disableOnInteraction: false
                                                    }}
                                                    modules={[Autoplay]}
                                                    navigation={{
                                                        prevEl: ".pro-single-prev",
                                                        nextEl: ".pro-single-next"
                                                    }}
                                                >
                                                    {
                                                        result.map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className="single-thumb">
                                                                    <img src={item.img} alt="" />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        Details
                                    </div>
                                </div>
                            </div>
                            {/* Review */}
                            <div className="review">
                                Review
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="col-lg-4 col-12">
                            Right Side
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
