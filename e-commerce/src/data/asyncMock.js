export const products = [
    {
        id: 1,
        name: "Smash Burger",
        price: 350,
        category: "burgers",
        stock: 20,
        description: "Hamburguesa de carne smash, con queso, lechuga y tomate",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/c9/66/69/pan-doble-de-carne-ultra.jpg"
    },
    {
        id: 2,
        name: "Pizzeta Caprese",
        price: 270,
        category: "pizza",
        stock: 10,
        description: "Pizzeta de 32cm caprese, tomate, albahaca, y muzzarella",
        img: "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1006592.jpg"
    },
    {
        id: 3,
        name: "Empanada Jamon y Queso",
        price: 55,
        category: "empanadas",
        stock: 50,
        description: "empanada de jamon y queso",
        img: "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1006592.jpg"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);
    })
}