import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet';


// Products url
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL;


const Shopfront = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${productsUrl}`)
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    const Products = ({ products }) => {
        const mappedProducts = products.map((product, index) => {
            function getFeaturedImage(product) {
                if (product && product.images && product.images[0]) {
                    return product.images[0].src;
                } else {
                    return 'https://via.placeholder.com/150'
                }
            }
            // return for the map
            return (
                <div className='item-container' key={index}>
                    <div className='d-flex flex-col'>
                        <img className='product-image' src={getFeaturedImage(product)} alt='ProductImage'></img><br></br>
                        <Link className='product-link' to={`/product/${product.id}`}>
                            {/* <h4 className='name'>{product.name}</h4> */}
                            <button className='name button-donate'>{product.name}</button>
                        </Link>
                        {/* <h3 className='name'>${product.prices.price} {product.prices.currency_code}</h3> */}

                    </div>
                </div>
            )
        })
        return (
            <>
                {mappedProducts}
            </>
        )
    }
    // Shopfront return
    return (
        <>
            <Helmet>
                <title>KI Donate Page</title>
                <meta name="description" content="This is my description of my home page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
            </Helmet>
            <div id='shop-page'>
                <h1 className='header-styles'>Support the Work We Do at Karunai Illam</h1>
                <div id='product-grid' className='d-flex-wrap'>
                    {loading ? <p className='loading-styles'>Loading ...</p> : <Products products={products} />}
                </div>
            </div>
        </>
    )
}

export default Shopfront