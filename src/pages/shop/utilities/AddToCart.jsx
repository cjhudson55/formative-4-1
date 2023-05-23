import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_BASEURL


const AddToCart = (productId, responseReceived, notificationMessage, buttonStatus) => {
    const idString = productId.toString();
    buttonStatus('Adding to cart ...')

    const updateCart = (endpoint) => {
        axios.post(endpoint, {
            id: idString,
            quantity: '1'
        })
            .then((respose) => {
                responseReceived(true)
                buttonStatus('Add to cart')
                notificationMessage('Successfully added to cart')
                // set the cart key
                const uniqueCartKey = response.data.cart_key;
                const itemCount = response.data.item_count;
                localStorage.setItem('cartKey', uniqueCartKey)
                localStorage.setItem('itemCount', itemCount)
            })
            .catch((error) => {
                console.log(err);
                responseReceived(true)
                notificationMessage('Soz')
            })
    }
    //check if a cart already exists
    if (localStorage.cart_key) {
        const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/add-item/?cart_key=${localStorage.cart_key}`
        updateCart(cartEndpoint)
    } else {
        const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/add-item`
        updateCart(cartEndpoint)
    }

}

export default AddToCart