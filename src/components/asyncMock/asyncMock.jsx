import netflix from './image/Netflix-Symbol.png'
import paramount from './image/paramount.png'
import hboMax from './image/hboMax.png'

const products = [
    {
        id: '1',
        name: 'Netflix - 1 Mes',
        price: 5.00,
        category: 'unMes',
        img: netflix,
        stock: 10,
        description: 'Cuentas Netflix por 1 mes'
    },
    { 
        id: '2', 
        name: 'Paramoun+ - 3 Meses', 
        price: 7.00, 
        category: 'tresMeses', 
        img: paramount, 
        stock: 10,
        description: 'Cuentas Paramoun+ por 3 meses'},
    { 
        id: '3', 
        name: 'HBO Max - Anual', 
        price: 5.00, 
        category: 'unAño', 
        img: hboMax, 
        stock: 10,
        description: 'Cuentas HBO Max por un año'}
        
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
// 


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((product) => product.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};
