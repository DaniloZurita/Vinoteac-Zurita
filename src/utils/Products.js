const Productos = [
    {
        id: 1,
        title: "Fernet Branca",
        img: ['https://http2.mlstatic.com/D_NQ_NP_839815-MLA42105294550_062020-O.jpg'],
        descrip: "El fernet es una bebida alcohólica de la familia de los amaros italianos elaborada a partir de la maceración de varios tipos de hierbas en alcohol",
        quantity: '750 ml',
        price: 1000,
        stock: 6,
        categoryId: 2,
        category: {
            name: 'Tragos',
            id: 2}
    },
    {
        id: 2,
        title: "Gin Tonic",
        img: ['https://www.aromadevid.com.ar/wp-content/uploads/2020/10/merle-gin-scaled.jpg'],
        descrip: "La bebida denominada en inglés gin and tonic​ es un cóctel compuesto de ginebra y agua tónica servida con hielo",
        quantity: '900 ml',
        price: 1200,
        stock: 2,
        categoryId: 2,
        category: {
            name: 'Tragos',
            id: 2}
    },
    {
        id: 3,
        title: "Vodka Absolut",
        img: ['https://media.tada.com.ar/produc_variant/00000691_b5c5aea9-dbca-4405-8d15-64b330d556ff.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2'],
        descrip: "El o la vodka es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón",
        quantity: "750 ml",
        price: 2600,
        stock: 3,
        categoryId: 3,
        category: {
            name: 'Promos',
            id: 3}
    },
    {
        id: 4,
        title: "Campari",
        img: ['https://www.espaciovino.com.ar/media/default/0001/56/thumb_55216_default_big.jpeg'],
        descrip: " Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo y sabor amargo.",
        quantity: "750 ml",
        price: 850,
        stock: 1,
        categoryId: 2,
        category: {
            name: 'Tragos',
            id: 2}
    },
    {
        id: 5,
        title: "Carpano",
        img: ['https://rinconelegido.com.ar/wp-content/uploads/2017/08/Carpano_Rosso_Rinconelegido.gif'],
        descrip: "Es un vermouth elegante, claro, fresco, complejo y de sabor largo. Inicialmente remite a un vino licoroso que se abre y expande.",
        quantity: "950 ml",
        price: 540,
        stock: 3,
        categoryId: 2,
        category: {
            name: 'Tragos',
            id: 2}
    },
];

export default Productos;