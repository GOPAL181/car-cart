const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Bugatti",
        img:"https://tse3.mm.bing.net/th?id=OIP.I_a_EfKR6Yc1TfZ7X8Ji4AHaE8&pid=Api&P=0&h=180" ,
        price: 4500000,
        desc: "super car" 
    },
    {
        name:"G Wagon",
        img:"https://tse2.mm.bing.net/th?id=OIP.Q5uUYmJaIymvnYDJcQvG2wHaE8&pid=Api&P=0&h=180",
        price: 7250000 , 
        desc:"solid body high performance"
    },
    {
        name:"Porche",
        price:851000,
        img:"https://hdqwalls.com/wallpapers/2016-porsche-911-turbo-s-qhd.jpg",
        desc:"high speed"
    },
    {
        name:"Audi Q7", 
        img: "https://tse2.mm.bing.net/th?id=OIP.r-afaW49Q97Ib8kWkaxt3QHaE8&pid=Api&P=0&h=180", 
        price: 4237900, 
        desc: " full comfort "
    },
   
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


