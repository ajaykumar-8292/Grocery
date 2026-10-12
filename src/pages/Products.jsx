import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import atta from "../assets/atta.png";
import rice from "../assets/rice.png";
import image from "../assets/image.jfif";
import image1 from "../assets/image1.jfif";
import image2 from "../assets/image2.jfif";
import image3 from "../assets/image3.jfif";
import image4 from "../assets/image4.jfif";
import image5 from "../assets/image5.jfif";
import image6 from "../assets/image6.jfif";
import image7 from "../assets/image7.jfif";
import image8 from "../assets/image8.jfif";
import image9 from "../assets/image9.jfif";
import image10 from "../assets/image10.jfif";
import image11 from "../assets/image11.jfif";
import image12 from "../assets/image12.jfif";
import image13 from "../assets/image13.jfif";
import image14 from "../assets/image14.jfif";
import image15 from "../assets/image15.jfif";
import image16 from "../assets/image16.jfif";
import image17 from "../assets/image17.jfif";
import image18 from "../assets/image18.jfif";
import image19 from "../assets/image19.jfif";
import image20 from "../assets/image20.jfif";
import image21 from "../assets/image21.jfif";
import image22 from "../assets/image22.jfif";
import image23 from "../assets/image23.jfif";
import image24 from "../assets/image24.jfif";
import image25 from "../assets/image25.jfif";
import imag26 from "../assets/image26.jfif";
import image27 from "../assets/image27.jfif";




function Products() {


    const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart`);
  };




 



    

   

  


 

  const products = [
   
   
{
      id: 1,
      name: " Wheat Atta",
      para: "Atta & Rice · Pack: 5 kg",
      image: atta,
      price: 399,
      oldPrice: 999,
      rating: 4.4,
    },

    {
      id: 2,
      name: " Basmati Rice",
      para: " Atta & Rice · Pack: 1 kg (10 kg)",
      image: rice,
      price: 369,
      oldPrice: 799,
      rating: 3.4,
    },
     {
      id: 3,
      name: " Toor Dal",
      para: ": Dal & Pulses · Pack: 5 kg",
      image: image,
      price: 540,
      oldPrice: 799,
      rating: 2.1,
    },

     {
      id: 4,
      name: " Chana Dal",
      para: " Dal & Pulses · Pack: 1 kg: 5 kg",
      image: image1,
      price: 520,
      oldPrice: 699,
      rating: 2.4,
    },
    {
      id: 5,
      name: " Cooking Oil",
      para: " Dal & Pulses · Pack: 1 kg:",
      image: image2,
      price: 155,
      oldPrice: 699,
      rating: 2.0,
    },

     {
      id: 6,
      name: "Turmeric Powder",
      para: "5.  Oil & Masala.  .  Pack: 1 L:",
      image: image3,
      price: 155,
      oldPrice: 699,
      rating: 2.0,
    },

      {
      id: 7,
      name: " Red Chilli Powder",
      para: " Oil & Masala · Pack: 100 g",
      image: image4,
      price: 45,
      oldPrice: 69,
      rating: 3.0,
    },


     {
      id: 8,
      name: " Salt",
      para: "  Oil & Masala · Pack: 100 g",
      image: image5,
      price: 60,
      oldPrice: 69,
      rating: 2.5,
    },

      {
      id: 9,
      name: " Salt",
      para: " : Fruits · Pack: 1 kg",
      image: image6,
      price: 25,
      oldPrice: 39,
      rating: 2.7,
    },
    

     {
      id: 10,
      name: " Banana",
      para: " Fruits · Pack: 1 kg",
      image: image7,
      price: 125,
      oldPrice: 139,
      rating: 3.7,
    },

     {
      id:11,
      name: " Orange",
      para: " Fruits · Pack: 1 kg",
      image: image8,
      price: 50,
      oldPrice: 79,
      rating: 3.9,
    },


      {
      id: 12,
      name: " Mango",
      para: " Fruits · Pack: 1 kg",
      image: image9,
      price: 80,
      oldPrice: 99,
      rating: 3.7,
    },


      {
      id: 13,
      name: " Potato",
      para: " Vegetables · Pack: 1 kg",
      image: image10,
      price: 30,
      oldPrice: 39,
      rating: 3.4,
    },

     {
      id: 14,
      name: " Onion",
      para: " Vegetables · Pack: 1 kg",
      image: image11,
      price: 40,
      oldPrice: 49,
      rating: 2.4,
    },

     {
      id: 15,
      name: " Tomato",
      para: " Vegetables · Pack: 1 kg",
      image: image12,
      price: 35,
      oldPrice: 39,
      rating: 2.7,
    },

     {
      id: 16,
      name: " Carrot",
      para: " Vegetables · Pack: 1 kg",
      image: image13,
      price: 60,
      oldPrice: 69,
      rating: 2.7,
    },

      {
      id: 17,
      name: " Cabbage",
      para: " Vegetables · Pack: 1 kg",
      image: image14,
      price: 40,
      oldPrice: 59,
      rating: 3.3,
    },

     {
      id: 18,
      name: " Cauliflower",
      para: " Vegetables · Pack: 1 kg",
      image: image15,
      price: 50,
      oldPrice: 59,
      rating: 3.3,
    },


     {
      id: 19,
      name: " Fresh Milk",
      para: " Dairy · Pack: 500 ml",
      image: image16,
      price: 35,
      oldPrice: 54,
      rating: 4.3,
    },

     {
      id: 20,
      name: "Paneer ",
      para: " Dairy · Pack: 200 mg",
      image: image17,
      price: 90,
      oldPrice: 134,
      rating: 4.3,
    },

     {
      id: 21,
      name: "Curd ",
      para: " Dairy · Pack: 500 mg",
      image: image18,
      price: 90,
      oldPrice: 40,
      rating: 4.8,
    },


       {
      id: 22,
      name: "Butter ",
      para: " Dairy · Pack: 100 mg",
      image: image19,
      price: 60,
      oldPrice: 70,
      rating: 3.8,
    },


     {
      id: 23,
      name: "Biscuits ",
      para: " Snacks · Pack: 200 g",
      image: image20,
      price: 30,
      oldPrice: 40,
      rating: 3.8,
    },
  

      {
      id: 24,
      name: "Corn Flakes ",
      para: " Breakfast · Pack: 500 g",
      image: image21,
      price: 120,
      oldPrice: 140,
      rating: 2.8,
    },

     {
      id: 25,
      name: " Tea",
      para: " Beverages · Pack: 250 g",
      image: image22,
      price: 150,
      oldPrice: 160,
      rating: 3.9,
    },
    

       {
      id: 26,
      name: "Coffee",
      para: " Beverages · Pack: 150 g",
      image: image23,
      price: 180,
      oldPrice: 199,
      rating: 3.2,
    },

      {
      id: 27,
      name: "Green Tea",
      para: " Beverages · Pack: 150 g",
      image: image24,
      price: 90,
      oldPrice: 120,
      rating: 3.6,
    },

      {
      id: 28,
      name: "Honey",
      para: " Other · Pack: 500 g",
      image: image25,
      price: 190,
      oldPrice: 220,
      rating: 3.3,
    },
       
    
    

    
    
    
    
    
     
   

  ];

 
  return (

    
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">


     

        {/* MANY PRODUCT CARDS */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols- ">

          <h2 className="text-3xl font-bold mb-6 md:ml-30">
            More Products
          </h2>
          <input type="text" 
          placeholder='Search Products' 
          className=' mb-6 w-full rounded-xl border border-gray-300 bg-white p-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 '
          />
<Link to="/Cart">
           <div className="mb-4 text-5xl md:ml-30 md:flex flex gap-">🛒

<div className=' text-2xl  md:w-80 '>
          <h1 className="text-2xl font-bold text-gray-800 md:w-120">
            Your Cart Is Empty
          </h1>
          <span className="mt- text-gray-500 text-lg md;h-5">
            Add your favourite grocery products to 
          </span>
          
          </div>


          </div>
          </Link>
          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />

                <div className="mt-4">


                    <p className="text-black font-semibold">
                 {product.para}
                  </p>

                  <p className="text-yellow-500 font-semibold">
                    ⭐ {product.rating}
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    {product.name}
                  </h3>

                  <div className="flex gap-2 items-center mt-3">

                    <span className="text-xl font-bold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>

                  </div>

                 
<button
  type="button"
  onClick={() => {
    if (typeof addToCart === "function") {
      addToCart(product);
      alert("Product added to cart successfully!");
    } else {
      alert("Error: Add to Cart function is not connected.");
    }
  }}
  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-bold mt-4 cursor-pointer"
>
  Add to Cart
</button>

                

                </div>
              </div>
            ))}

          </div>
        </div>

  



    
  )
}

export default Products