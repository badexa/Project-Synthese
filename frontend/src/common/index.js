const userServiceBaseURL = "http://localhost:8081"; // Base URL for user-service
const productServiceBaseURL = "http://localhost:8082"; // Base URL for product-service

const SummaryApi = {
    // User Service Endpoints
    signUP : {
        url : `${userServiceBaseURL}/apisignup`,
        method : "post"
    },
    signIn : {
        url : `${userServiceBaseURL}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${userServiceBaseURL}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${userServiceBaseURL}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${userServiceBaseURL}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${userServiceBaseURL}/api/update-user`,
        method : "post"
    },
    deleteUser: {
        url: `${userServiceBaseURL}/api/delete-user`,
        method: 'post',
    },

    // Product Service Endpoints
    uploadProduct : {
        url : `${productServiceBaseURL}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${productServiceBaseURL}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${productServiceBaseURL}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${productServiceBaseURL}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${productServiceBaseURL}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${productServiceBaseURL}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${productServiceBaseURL}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${productServiceBaseURL}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${productServiceBaseURL}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${productServiceBaseURL}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${productServiceBaseURL}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${productServiceBaseURL}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${productServiceBaseURL}/api/filter-product`,
        method : 'post'
    },
    deleteProduct: {
        url: `${productServiceBaseURL}/api/delete-product`,
        method: 'post'
    }
}

export default SummaryApi;
