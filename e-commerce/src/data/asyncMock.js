export const products = [
    {
        id: 1,
        name: "Smash Burger",
        price: 350,
        category: "Burger",
        stock: 20,
        description: "Hamburguesa de carne smash, con queso, lechuga y tomate",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/c9/66/69/pan-doble-de-carne-ultra.jpg"
    },
    {
        id: 2,
        name: "Pizzeta Caprese",
        price: 270,
        category: "Pizza",
        stock: 10,
        description: "Pizzeta de 32cm caprese, tomate, albahaca, y muzzarella",
        img: "https://storage.googleapis.com/fitia-api-bucket/media/images/recipe_images/1006592.jpg"
    },
    {
        id: 3,
        name: "Empanada Jamon y Queso",
        price: 55,
        category: "Empanadas",
        stock: 50,
        description: "empanada de jamon y queso",
        img: "https://img.freepik.com/foto-gratis/tartas-recien-horneadas-bandeja-madera_181624-53000.jpg"
    },
    {
        id: 4,
        name: "Vegan Burger",
        price: 360,
        category: "Burger",
        stock: 50,
        description: "Hamburguesa vegana de lentejas",
        img: "https://img.freepik.com/fotos-premium/comida-vegana-hamburguesa-lentejas-deliciosas-sobre-fondo-rustico-oscuro_101125-1166.jpg"
    },
    {
        id: 5,
        name: "Chesse Burger",
        price: 390,
        category: "Burger",
        stock: 50,
        description: "Hamburguesa con queso emmental, queso cheddar y bastones de queso.",
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/3D56XSBRYRAHNLL2IVTW7DDYFA.jpg"
    },
    {
        id: 6,
        name: "Doble cuarto",
        price: 390,
        category: "Burger",
        stock: 50,
        description: "Hamburguesa doble cuarto de libra, con dos smash de carne.",
        img: "https://www.cucinare.tv/wp-content/uploads/2022/05/Dia-de-la-H-1024x576.jpg"
    },
    {
        id: 7,
        name: "Pizzeta Cheddar",
        price: 290,
        category: "Pizza",
        stock: 10,
        description: "Pizzeta de 32cm de queso cheddar",
        img: "https://somerdale.com/wp-content/uploads/2018/05/Optimized-shutterstock_85029136.jpg"
    },
    {
        id: 8,
        name: "Pizzeta Margarita",
        price: 270,
        category: "Pizza",
        stock: 10,
        description: "Pizzeta de 32cm queso mozzarella, hojas de albahaca fresca",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NfcQ2fRpM7fvqlQY2emM_31hn9Gt1XlxtvjnhWIdNw&s"
    },
    {
        id: 9,
        name: "Empanada de Carne cuchillo",
        price: 50,
        category: "Empanadas",
        stock: 50,
        description: "empanada de carne cortada a cuchillo",
        img: "https://img.freepik.com/foto-gratis/tartas-recien-horneadas-bandeja-madera_181624-53000.jpg"
    },
    {
        id: 10,
        name: "Empanada de Queso y Cebolla",
        price: 55,
        category: "Empanadas",
        stock: 50,
        description: "empanada de queso y cebolla",
        img: "https://img.freepik.com/foto-gratis/tartas-recien-horneadas-bandeja-madera_181624-53000.jpg"
    },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        },2000);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productsFiltered = products.filter(
            (prod) => prod.category === category
        );

        setTimeout(() => {
            resolve(productsFiltered);
        }, 1000);

    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const productFiltered = products.find((prod) => prod.id === parseInt(id));
        resolve(productFiltered)
    });
};