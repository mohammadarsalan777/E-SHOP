import React, { useState } from 'react'
import PageHeader from '../PageHeader'
import Data from '../../products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'

const showResults = "Showing 01 - 12 out of 100+ Results"

const Shop = () => {
    const [GridList, setGridList] = useState(true)
    const [products, setProducts] = useState(Data)

    // Pagination
    const [currentPage, setCurretPage] = useState(1)
    const productsPerPage = 12

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    // Function to change the current page
    const pagination = (pageNumber) => {
        setCurretPage(pageNumber)
    }

    // Filter products based on category
    const [selectedCategory, setSelectedCategory] = useState("All")
    const menuItems = [...new Set(Data.map((val) => val.category))]

    const filterItem = ((curCat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curCat
        })
        setSelectedCategory(curCat)
        setProducts(newItem)
    })

    return (
        <div>
            <PageHeader title="Shop Page" curPage="Shop" />
            {/* Shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* Layout and title */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>
                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProduct={products.length}
                                    paginate={pagination}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
