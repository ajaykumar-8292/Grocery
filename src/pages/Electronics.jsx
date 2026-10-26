import React from 'react'
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart } from "lucide-react";





const electronicsGroups = [
  {
    title: "Everyday electronics",
    categories: [
      {
        name: "Workspace essentials",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      },
      {
        name: "Chargers & cables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9cMsQjWkzO-I44P270BPIu1IY6KEEGROkgP2_QojzA&s=10",
      },
      {
        name: "Storage & power banks",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
      },
      {
        name: "Power accessories",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      },
      {
        name: "Gaming essentials",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400",
      },
      {
        name: "Printers & inks",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400",
      },
      {
        name: "Networking & security",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
      },
      {
        name: "Torches & lights",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
      },
    ],
  },
  {
    title: "Audio devices & wearables",
    categories: [
      {
        name: "Buds & wired earphones",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
      },
      {
        name: "Headphones & neckbands",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      },
      {
        name: "Speakers & soundbars",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      },
      {
        name: "Smart watches",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      },
    ],
  },
];

const bestsellers = [
  {
    name: "Trending deals",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300",
  },
  {
    name: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
  },
  {
    name: "Audio & wearables",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
  {
    name: "TVs, fridges & more",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300",
  },
  {
    name: "Personal grooming",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=300",
  },
];


{/*second section */}

const products = [
  {
    name: "Prestige- Pic 20 NEO 1600W ",
    weight: "1 Unit",
    price: 2330,
    rating: "3.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZOfJ2-L_VcYazMLKw5dbrcxRIsdSxy7W8GRnn1sAGw&s=10",
  },
  {
    name: "boAt-Airdopes 311 pro",
    weight: "1 unit",
    price: 749,
    rating: "4.2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpD9qgRJQWDrtXfpfSKAoakEbPQUEPUSZ8wpOahvGmUw&s=10",
  },
  {
    name: "Pigeon by Stovekraft",
    weight: "1 pc",
    price: 1585,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcYdfc5rH-xdSC2aH1ht7tc4b6eZMf24-vtsdX7FPAA&s=10",
  },
  {
    name: "Apple IPhone 17 256GB,White",
    weight: "undefine",
    price: 62999,
    rating: "5.4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5K9Me5wW8onJvIURPvOAvi-hHYeGNSyg2wJaWDOn9qg&s=10",
  },
  {
    name: "Apple Mackbook",
    weight: "undefine",
    price: 69990,
    rating: "4.0",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxwyKfziPd53Bve37wB4D7HX5gcB4dOsUW7kwmyhBGg&s=10",
  },
  {
    name: " Ambrane- Type c ",
    weight: "1 pc",
    price: 210,
    rating: "3.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStARagnrjKA31kDtItV9s3rW6sy0NzfQZJit5zPoeCxA&s=10",
  },

   
];

{/*second section */}
const products1 = [
     {
    name: " Lifelong-Lightbeam",
    weight: "2 pc",
    price: 4210,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjxPARAnZORwZEWRzrlWDxcZ43pLskWf2Gli-ndpV4w&s=10",
  },

    {
    name: " Wonderchef-Nutri Cup Portable",
    weight: "300 ML",
    price:1295,
    rating: "4.1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGE-dYVGHn7EEus8moqQFEcfi0OUeTYSSEmuKdGdG3Q&s=10",
  },

     {
    name: " Presting-regal 750w",
    weight: "1 unit",
    price: 1925,
    rating: "4.3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5VWF-GlscpxBvmFRxk5MP8S_v90C7VPezTo62liMLQ&s=10",
  },


     {
    name: " Wonderrchef-ragenta Espresso..",
    weight: "1 pc",
    price: 2599,
    rating: "4.8",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagwX1iuk57RPiWCiLcX3M8eQNYzx8tziATy7Crq9VEw&s=10 ",
  },


    {
    name: " Agaro-Marvel 700W",
    weight: "1.8 L",
    price: 2215,
    rating: "3.4",
    image:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQNGuCvDmwaqti_lLt_yvWLpTrqhnm4N2dcgzdh9iBw&s=10",
  },

   {
    name: " Braun-Beard",
    weight: "1 pc",
    price: 2365,
    rating: "3.2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53hGUEYeI0zTxA-TX7mEHz7JySMnA7olqPq1FCrq46g&s=10 ",
  },

];


 function Electronics() {

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
    <div className="w-full space-y-12 bg-white px-4 py-6 sm:px-6">
      {electronicsGroups.map((group) => (
        <section key={group.title}>
          <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
            {group.title}
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {group.categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => console.log("Selected:", category.name)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 "
              >
                <div className="flex min-h-16 items-center justify-center px-2 pt-3 sm:min-h-20">
                  <h3 className="text-center text-sm font-bold leading-tight text-gray-900 sm:text-base">
                    {category.name}
                  </h3>
                </div>

                <div className="flex h-24 items-center justify-center p-2 sm:h-32">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
          Bestsellers
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory">
          {bestsellers.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => console.log("Selected:", item.name)}
              className="w-24 shrink-0 snap-start text-center sm:w-32"
            >
              <div className="flex h-24 items-center justify-center rounded-xl border border-gray-200 p-2 sm:h-28">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-gray-700">{item.name}</p>
            </button>
          ))}
        </div>
      </section>
    </div>




    {/*First section */}


 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-blue-50 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
BestSellers
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
      <div className="rounded-lg  bg-yellow-150 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
    Top deals, big savings
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


export default Electronics