import { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

// utilities
import AddToCart from './utilities/AddToCart'
import Notification from './utilities/Notification'

// products url
const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL


const Product = (props) => {
    const { id, image } = useParams()
    const navigate = useNavigate()

    // state variables
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [responseReceived, setResponse] = useState(false)
    const [notification, setNotification] = useState('')
    const [buttonStatus, updateButtonStatus] = useState("Add to Cart")

    const endpoint = `${productsUrl}/${id}`
    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                setProduct(res.data)
                setLoading(false)
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [endpoint])

    if (loading) {
        return <div className='loading-styles'>Loading ...</div>
    }

    return (
        <>
            <div id='goBack'>
                <button
                    onClick={() => navigate(-1)}
                    className='button-go-back'
                >
                    <ArrowLeft /> Go Back
                </button>
            </div>

            <div className='d-flex'>
                <div className='container-transparent'>
                    <div className='product-container item-container'>
                        <img className='product-image' src={product.images[0].src} alt="User Image" />
                    </div>
                </div>
                <div className='container-transparent'>
                    <div className='product-container item-container'>
                        <h4 className='name mt-3'>{product.name} and user id {id}</h4>
                        <button
                            id='add-to-cart-button'
                            className='button-primary'
                            onClick={() => {
                                AddToCart(
                                    product.id,
                                    setResponse,
                                    setNotification,
                                    updateButtonStatus
                                )
                            }}
                        >
                            {buttonStatus}
                        </button>
                        {/* custom message for the user when a product is added */}
                        {responseReceived && <Notification type={notification} />}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product