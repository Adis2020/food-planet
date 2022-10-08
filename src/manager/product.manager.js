const cartKey = 'cart';

const productManager = {
    setProduct: (product) => {
        localStorage.setItem(cartKey, product)
    },
    getProduct: () => {
        return JSON.parse(localStorage.getItem(cartKey));
    },
    checkProduct: (id, products) => {
        return products.findIndex(item => item.id === id);
    }
}

export default productManager;