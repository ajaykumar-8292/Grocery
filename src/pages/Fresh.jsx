import React from 'react'
import { Link } from "react-router-dom";


import { ArrowRight, Star, Heart } from "lucide-react";

function Fresh() {

    const categories = [
  {
    name: "Fresh fruits",
    image: "🍎",
    bg: "bg-green-100",
  },
  {
    name: "Fresh Vagetable",
    image: "🥦",
    bg: "bg-purple-100",
  },
  {
    name: "Cute & Exotics",
   image: "🥑",
    bg: "bg-pink-100",
  },
  {
    name: "Herbs & spice mix",
    image: "🌶️",
    bg: "bg-orange-100",
  },
  {
    name: "Dairy & plant-based ",
    image: "🧀",
    bg: "bg-yellow-100",
  },
  {
    name: "Meat, egg",
    image: "🍗",
    bg: "bg-rose-100",
  },
  {
    name: "Healthy & organic",
    image: "🥗",
    bg: "bg-red-100",
  },
  {
    name: "Milk",
    image: "🥛",
    bg: "bg-fuchsia-100",
  },
];

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfaC0lAde5WAwr36qxwi83eOgzX8QeR_HCt14DriXnA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH6Mk8Z7F71hgqGun9m0wSpwFx4mmlbfDyG3dhdXGXQ&s",
  "https://img.magnific.com/free-photo/horizontal-banner-cosmetic-product-with-kiwi-citrus_23-2149446539.jpg?semt=ais_hybrid&w=740&q=80",
  "https://static.vecteezy.com/system/resources/thumbnails/049/376/261/small/kiwi-fruit-with-cut-out-facial-features-and-expressions-photo.jpg",
];


const products = [
  {
    name: "Apple ",
    weight: "1 kg",
    price: 180,
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop",
  },
  {
    name: "Banana",
    weight: "1 Dozen",
    price: 69,
    rating: "4.1",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop",
  },
  {
    name: "Mango",
    weight: "1 kg",
    price: 125,
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop",
  },
  {
    name: "Orange",
    weight: "1 kg",
    price: 90,
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop",
  },
  {
    name: "Grapes",
    weight: "500 g",
    price: 90,
    rating: "3.1",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop",
  },
  {
    name: "Strawberry ",
    weight: "250 g",
    price: 130,
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop",
  },

   {
    name: "Pineapple",
    weight: "1 piece",
    price: 80,
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop",
  },
  {
    name: "Watermelon",
    weight: "1 piece",
    price: 60,
    rating: "4.6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ7D_hzWeZ2eMM6ItXXvnaJuj0IVg3_rNMD5Rl4uwOQ&s=10",
  },
];




const products1 = [
  {
    name: "Fresho Cherry",
    weight: "250 g",
    price: 180,
    rating: "4.1",
    image:
      "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=500&auto=format&fit=crop",
  },
  {
    name: "Fresho Litch",
    weight: "1 kg",
    price: 169,
    rating: "3.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8C_7WgV0fnOZIzpTWmuS6Cwux5EUVqRnOIwCleV4AQ&s=10",
  },
  {
    name: "Fresho Peach",
    weight: "1 kg",
    price: 199,
    rating: "4.6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvgxkYtzQoYvhYOrAwZS6958fg7XVuRY7ZvyWAWYJxg&s=10",
  },
  {
    name: "Fresho Mangosteen",
    weight: "2 pcs ",
    price: 86,
    rating: "3.4",
    image:
      "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?w=500&auto=format&fit=crop",
  },
  {
    name: "Fresho Plum Imported",
    weight: "1 kg",
    price: 290,
    rating: "3.3",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop",
  },
  {
    name: "Fresho Jamun",
    weight: "1 kg",
    price: 230,
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=500&auto=format&fit=crop",
  },

   {
    name: "Fresho Kiwi Green",
    weight: "3 piece",
    price: 89,
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop",
  },
 

   {
    name: "Red Flesh Dragon Frui",
    weight: "1 pc",
    price: 84,
    rating: "3.9",
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&auto=format&fit=crop",
  },

   {
    name: "Apple Royal Gala",
    weight: "4 pc",
    price: 176,
    rating: "3.3",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop",
  },


   
];


const products2 = [
  {
    name: "Fresho Pomegranate",
    weight: "200 g",
    price: 120,
    rating: "4.9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGbVV9jgmeuLu-tbuESdkxmhNeBKiEDU805OWJ8GdYw&s",
  },
  {
    name: "Fresho Thai Guava Pink Center",
    weight: "2 pc",
    price: 43,
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500",
  },
  {
    name: "Fresho Apple Shimla",
    weight: "1 L",
    price: 260,
    rating: "3.6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_6qVs-AwgK0s2vNXUSvbkrQkLqAlzJgpZSknbfyn9Q&s=10",
  },
  {
    name: "Small Fresho Pomegranate",
    weight: "80 gm",
    price: 55,
    rating: "4.4",
    image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOPGgFFPe-n-mdVTeLxRnBBosV2hRJEf9RNU6AqCv2g&s=10",
  },
  {
    name: "Fresho White Center Guav",
    weight: "2 pc",
    price: 60,
    rating: "4.2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9RN6QR1p-bN6MSEEWjBXiSzwmNMuJwZJZ0QhWMYP4Q&s=10",
  },
  {
    name: "Fresho Sweet Corn / Indian Bhutta",
    weight: "1 pc",
    price: 27,
    rating: "4.1",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500",
  },

  
];

{/*Add to button function */}


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


  return (
    <>
  {/*Shop By Category */}
<section className="w-full bg-white px-5 py-4">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-3 text-1xl font-medium text-gray-800 text- md:text-left pt-3">
          Dally Fresh Essentials
        </h2>

        <div className="grid grid-cols-8 gap-10 max-[700px]:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group flex min-w-0 cursor-pointer flex-col items-center"
            >
              <div
                className={`${category.bg} flex h-14 w-full items-center justify-center rounded-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md`}
              >
                <span className="text-3xl">
                  {category.image}
                </span>
              </div>

              <p className="mt-1 text-center text-[9px] font-medium text-gray-700">
                {category.name}
              </p>
            </div>
          ))}
        </div>

      </div>
      </section>


 <div className="w-full overflow-hidden py-4">
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2  md:overflow-visible lg:grid-cols-1 mw:w-full w-full">
        {[...images ].map((image, index) => (
          <div
            key={index}
            className="h-32 md:h-54 md:w-full shrink-0 overflow-hidden rounded-xl shadow-md sm:h-44 sm:w-56"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    
      {/*first section */}



 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-gray-100 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Fresh & Handy 
          </h2>
<Link to="/Products">
          <button className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer">
            View All <ArrowRight size={11} />
          </button>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="w-[70%] shrink-0 snap-start rounded-md border border-slate-200 bg-white p-2 transition hover:-translate-y-0.5 hover:shadow-md md:w-auto md:shrink md:snap-none ml-">
            
              {/* Image and Wishlist */}
              <div className="relative flex h-26 items-center justify-center overflow-hidden rounded bg-white sm:h-25 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />

                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-0.5 top-0.5 rounded-full bg-white/90 p-1 text-slate-500 hover:text-red-500 "
                >
                  <Heart size={11} />
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-1">
                <h3 className="truncate text-[14px] font-semibold text-slate-900  ">
                  {product.name}
                </h3>

                <p className="text-[11px] text-slate-500">
                  {product.weight}
                </p>

                <p className="mt-1 text-[10px] font-bold text-emerald-700">
                  ₹{product.price}
                </p>

                <div className="mt-0.5 flex items-center gap-1">
                  <Star
                    size={10}
                    fill="#eab308"
                    className="text-yellow-500"
                  />
                  <span className="text-[9px] font-medium text-slate-600">
                    {product.rating}
                  </span>
                </div>

                {/* Add to Cart */}
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
                  className="mt-1.5 w-full rounded-sm bg-emerald-700 px-1 py-1.5 text-[9px] font-semibold text-white transition hover:bg-emerald-800 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




     {/*Second section */}

{/*Beauty & Personal Care */}

 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-blue-50 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Season's best picks
          </h2>
<Link to="/Products">
          <button className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer">
            View All <ArrowRight size={11} />
          </button>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-6">
          {products1.map((product) => (
            <div
              key={product.name}
              className="w-[70%] shrink-0 snap-start rounded-md border border-slate-200 bg-white p-2 transition hover:-translate-y-0.5 hover:shadow-md md:w-auto md:shrink md:snap-none ml-">
            
              {/* Image and Wishlist */}
              <div className="relative flex h-26 items-center justify-center overflow-hidden rounded bg-white sm:h-25 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />

                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-0.5 top-0.5 rounded-full bg-white/90 p-1 text-slate-500 hover:text-red-500 "
                >
                  <Heart size={11} />
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-1">
                <h3 className="truncate text-[14px] font-semibold text-slate-900  ">
                  {product.name}
                </h3>

                <p className="text-[11px] text-slate-500">
                  {product.weight}
                </p>

                <p className="mt-1 text-[10px] font-bold text-emerald-700">
                  ₹{product.price}
                </p>

                <div className="mt-0.5 flex items-center gap-1">
                  <Star
                    size={10}
                    fill="#eab308"
                    className="text-yellow-500"
                  />
                  <span className="text-[9px] font-medium text-slate-600">
                    {product.rating}
                  </span>
                </div>

                {/* Add to Cart */}
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
                  className="mt-1.5 w-full rounded-sm bg-emerald-700 px-1 py-1.5 text-[9px] font-semibold text-white transition hover:bg-emerald-800 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      



      {/*Third section */}

 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-white p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Top Deals
          </h2>
<Link to="/Products">
          <button className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer">
            View All <ArrowRight size={11} />
          </button>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products2.map((product) => (
            <div
              key={product.name}
              className="min-w-0 rounded-md border border-slate-200 bg- p-1.5 transition hover:-translate-y-0.5 hover:shadow-md  "
            >
              {/* Image and Wishlist */}
              <div className="relative flex h-16 items-center justify-center overflow-hidden rounded bg-white sm:h-25">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />

                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-0.5 top-0.5 rounded-full bg-white/90 p-1 text-slate-500 hover:text-red-500 "
                >
                  <Heart size={11} />
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-1">
                <h3 className="truncate text-[14px] font-semibold text-slate-900  ">
                  {product.name}
                </h3>

                <p className="text-[11px] text-slate-500">
                  {product.weight}
                </p>

                <p className="mt-1 text-[10px] font-bold text-emerald-700">
                  ₹{product.price}
                </p>

                <div className="mt-0.5 flex items-center gap-1">
                  <Star
                    size={10}
                    fill="#eab308"
                    className="text-yellow-500"
                  />
                  <span className="text-[9px] font-medium text-slate-600">
                    {product.rating}
                  </span>
                </div>

                {/* Add to Cart */}
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
                  className="mt-1.5 w-full rounded-sm bg-emerald-700 px-1 py-1.5 text-[9px] font-semibold text-white transition hover:bg-emerald-800 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </>
  );
}

export default Fresh;