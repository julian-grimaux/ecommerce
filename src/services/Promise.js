const products = [
    {id:1, name: 'producto1', description: 'descripcion1', price:'$10',stock:'5'},
    {id:2, name: 'producto2', description: 'descripcion2', price:'$20',stock:'10'},
    {id:3, name: 'producto3', description: 'descripcion3', price:'$30',stock:'20'},
    {id:4, name: 'producto4', description: 'descripcion4', price:'$40',stock:'25'},
    {id:5, name: 'producto5', description: 'descripcion5', price:'$50',stock:'30'},
    {id:6, name: 'producto6', description: 'descripcion6', price:'$60',stock:'10'},
    {id:7, name: 'producto7', description: 'descripcion7', price:'$70',stock:'5'},
    {id:8, name: 'producto8', description: 'descripcion8', price:'$80',stock:'20'},
];

const getProduct = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve (products);
        },2000);
    });
}

export default getProduct;