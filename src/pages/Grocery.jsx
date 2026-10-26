import React from 'react'
import { Link } from "react-router-dom";


import { ArrowRight, Star, Heart } from "lucide-react";


const categoryGroups = [
  {
    title: "Daily essentials",
    categories: [
      {
        name: "Atta & flours",
        image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=400",
      },
      {
        name: "Dals & pulses",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400",
      },
      {
        name: "Edible oils & ghee",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      },
      {
        name: "Rice & rice products",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      },
      {
        name: "Masalas & spices",
        image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400",
      },
      
      
      {
        name: "Organic staples",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
      },
    ],
  },
  {
    title: "Snacks & Drinks",
    categories: [
      {
        name: "Chips & namkeens",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400",
      },
      {
        name: "Biscuits & cakes",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
      },
      {
        name: "Instant & frozen foods",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400",
      },
      {
        name: "Breakfast options",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400",
      },
      {
        name: "Drinks & juices",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400",
      },
      {
        name: "Tea & coffee",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      },
     
    ],
  },
];

const products = [
  {
    name: "Wheat Atta ",
    weight: "5 kg",
    price: 399,
    rating: "4.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU02X1k6ynsAQUdQFasGS_uUNqBshTTbQmhcDpoA3k1A&s=10",
  },
  {
    name: "Basmati Rice",
    weight: "500 g",
    price: 369,
    rating: "4.5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ_UVXap9SVImCe5KRHHYqZBxpxhVbQ0SG-0OoaudBxqbpJ0ODcFDAZe9&s=10",
  },
  {
    name: "Rajdhani-Chana-Dal",
    weight: "500 g",
    price: 65,
    rating: "4.6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9ZFKqSwQU-xRkrE827HgeSqjHVXjDj2V5WPNYOXtgw&s=10",
  },
  {
    name: "Salt",
    weight: "1 kg",
    price: 30,
    rating: "4.4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7GGv71f3d74o3jgXmxgFvVM6Qkf_kGxMGcDbnHF8tA&s=10",
  },
  {
    name: "Future Oil",
    weight: "5 l",
    price: 490,
    rating: "4.8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZXDrs5Ly6r5U3EpHPLvHhFim2hepFyuYFmlbe3FqGg&s=10",
  },
  {
    name: "Sds all in one masala ",
    weight: "50 g",
    price: 110,
    rating: "4.3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqyqzPUhHPBOsbi-BPIwRGCfuWlCJiI2RxxdaqULUzSoCBsI1IlomcO-9&s=10",
  },
];



{/*second section */}

const products1 = [
  {
    name: "Red Label Natural ",
    weight: "1 kg",
    price: 367,
    rating: "4.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-5QYWyrim340K-efe0oUkkATd_b4FlR81nTZRuzfuw&s=10",
  },
  {
    name: "Cadbury Dairy Milk",
    weight: "112 g",
    price: 149,
    rating: "4.5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0pdjNk_0o68Uh_qmpCf8ZQdhGyFRz6giaENg2Omb5g&s=10",
  },
  {
    name: "Mountain Dew",
    weight: "2.25 l",
    price: 85,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhEWBZRRk-lrufQ4OD5WeqzRE9M2CNdijn_NRYdpAxQ&s=10",
  },
  {
    name: "Pukka Chamomile",
    weight: "30 g",
    price: 30,
    rating: "3.4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fzwnsQjkpA3KbKvk_YJVwfPsyfbHXNajpAhXbSDXQA&s=10",
  },
  {
    name: "Top Ramen Curry",
    weight: "280 g",
    price: 90,
    rating: "4.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7lcsoFlFg1ir6ZMnMYJsE_ap000ib7L-Qvv2tQybvw&s=10",
  },
  {
    name: " Cadbury 5 Star",
    weight: "250 g",
    price: 410,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgX_VRjIToPD8KInJKS7MTsZzE_kz7NjfmPB-3pFXbA&s=10",
  },

    {
    name: " Wow Momo Chicken Darjeeling",
    weight: "20 pc",
    price: 210,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnVYScbe_zNa_Oa88hdQOgSCbvNYCu9xS2MuqfpSOdA&s",
  },

    {
    name: " 7UP Soft Drink",
    weight: "2.25 L",
    price: 95,
    rating: "4.9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGwrpTiyY_BrPpsLr1N6daWa0eW4FTot_-GKjI8HDnQ&s=10",
  },

     {
    name: " Amul Fruit & Nut",
    weight: "150 g",
    price: 195,
    rating: "4.3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpleKZoxybPWVxwSZOziUU-OEroG1AOrFNiYLJEruq1Q&s",
  },


     {
    name: " Maggi",
    weight: "150 g",
    price: 25,
    rating: "4.3",
    image:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQKjtMx5UqTrzQhD5Egvtema55YxvJCUJITSX7I93KA&s=10",
  },


    {
    name: " Nescafe Classic",
    weight: "143 g",
    price: 125,
    rating: "3.3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOyG_wV3Vj6oImEk9OUMOnDD_EMLkM5VxhE5-5z9k-A&s=10 ",
  },

   {
    name: " Doritos Nacho ",
    weight: "143 x 2 g",
    price: 135,
    rating: "3.2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoxYwG04Ui_XV2NNGSgqvgJ8DyT2mCxwqzleOODhwow&s=10 ",
  },
];

 function Categories() {


    
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
    <div className="w-full space-y-10 bg-white px-4 py-6 sm:px-6">
      {categoryGroups.map((group) => (
        <section key={group.title}>
          <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
            {group.title}
          </h2>

          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {group.categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  console.log("Selected category:", category.name)
                }
                className="group overflow-hidden rounded-2xl border border-orange-100 bg-orange-50 text-center transition duration-20 "
              >
                <div className="flex h-10 md:h-10 md:w- items-center justify-center px-2 pt-3 sm:h-36">
                  <h3 className="text-sm font-bold leading-tight text-gray-900 sm:text-base">
                    {category.name}
                  </h3>
                </div>

                <div className="flex h-20 items-center justify-center px-2 pb-3 sm:h-24">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>


{/*first section */}


 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-yellow-100 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Grocery & kitchen
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


 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-blue-50 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
    New Launches
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


    </>
  );
}


export default Categories;