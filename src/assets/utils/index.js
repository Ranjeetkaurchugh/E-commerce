// importing axios
import axios from "axios";
// Saving API URL
const API_ROOT = "https://fakedata-ch1p.onrender.com";

// creating a random user id
export const generateRandomUserId = () => {
  const userID = Math.floor(Math.random() * 100000);
  return userID !== 0 ? userID : userID + 1;
};

// fetching all the products from API
export async function getProducts() {
  return await axios
    .get(`${API_ROOT}/products`)
    .then((res) => {
      console.log(res.data);
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}

// fetching a single product from API
export async function getProduct(productID) {
  return await axios
    .get(`${API_ROOT}/products/${productID}`)
    .then((res) => {
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}

// sending edit request to API
export async function editProduct(editedProduct, productID) {
  return await axios
    .patch(`${API_ROOT}/products/${productID}`, { ...editedProduct })
    .then((res) => {
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}

// sending request to add new product to API
export async function addNewProduct(newProduct) {
  return await axios
    .post(`${API_ROOT}/products`, {
      title: newProduct.title,
      rating: newProduct.rating,
      price: newProduct.price,
      description: newProduct.description,
      image: newProduct.image,
    })
    .then((res) => {
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}

// sending request to delete product to API
export async function delProduct(productId) {
  return await axios
    .delete(`${API_ROOT}/products/${productId}`)
    .then(() => {
      return {
        success: true,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}

// fetching cart info from API
export async function getCartItems(userId) {
  return await axios
    .get(`${API_ROOT}/cart/?userId=${userId}`)
    .then((res) => {
      return {
        data: res.data,
        success: true,
      };
    })
    .catch((err) => {
      return {
        error: err.message,
        success: false,
      };
    });
}
