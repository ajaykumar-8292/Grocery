import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ArrowRight } from "lucide-react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { VscTerminalSecure } from "react-icons/vsc";
import { FaTruck } from "react-icons/fa";





import hero from "../assets/hero.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";
import hero7 from "../assets/hero7.png";
import hero8 from "../assets/hero8.png";


 




function Home() {
    const images = [hero, hero1, hero2, hero3, hero4];

    const[currentImage, setCurrentImage] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return() => clearInterval(timer)
    }, [images.length]);

const categories = [
  {
    name: "Vegetable",
    image: "🥦",
    bg: "bg-green-100",
  },
  {
    name: "SeaFish",
    image: "🐟",
    bg: "bg-purple-100",
  },
  {
    name: "Eggs",
    image: "🥚",
    bg: "bg-pink-100",
  },
  {
    name: "Baking",
    image: "🛍️",
    bg: "bg-orange-100",
  },
  {
    name: "Cheese",
    image: "🧀",
    bg: "bg-yellow-100",
  },
  {
    name: "Fresh Fruit",
    image: "🍌",
    bg: "bg-rose-100",
  },
  {
    name: "Beef",
    image: "🥩",
    bg: "bg-red-100",
  },
  {
    name: "Milk",
    image: "🥛",
    bg: "bg-fuchsia-100",
  },
];

const products = [
  {
    name: "Fresh Apples",
    weight: "1 kg",
    price: 120,
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&auto=format&fit=crop",
  },
  {
    name: "Bananas",
    weight: "1 kg",
    price: 40,
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&auto=format&fit=crop",
  },
  {
    name: "Milk",
    weight: "1 L",
    price: 60,
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&auto=format&fit=crop",
  },
  {
    name: "Brown Bread",
    weight: "400 gm",
    price: 45,
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&auto=format&fit=crop",
  },
  {
    name: "Tomatoes",
    weight: "500 g",
    price: 30,
    rating: "4.2",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300&auto=format&fit=crop",
  },
  {
    name: "Broccoli",
    weight: "500 g",
    price: 70,
    rating: "4.1",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&auto=format&fit=crop",
  },

  
];




{/*second time */}

const products1 = [
  {
    name: "Tomato ",
    weight: "1 kg",
    price: 80,
    rating: "4.7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkeBCptZ0x8Wd67gJpl4XThNEmUM0teiWXEYRci9DAQ&s=10",
  },
  {
    name: "Cauliflower",
    weight: "500 g",
    price: 65,
    rating: "4.5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6140YwI_0RqiWHnCrBLodZGdPCaAd0QIf5bzVxh202g&s=10",
  },
  {
    name: "Fresh Carrots",
    weight: "500 g",
    price: 35,
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&auto=format&fit=crop",
  },
  {
    name: "Potatoes",
    weight: "1 kg",
    price: 30,
    rating: "4.4",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop",
  },
  {
    name: "Fresh Strawberries",
    weight: "250 g",
    price: 90,
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&auto=format&fit=crop",
  },
  {
    name: "Green Capsicum",
    weight: "500 g",
    price: 40,
    rating: "4.3",
    image:
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&auto=format&fit=crop",
  },
];
   

{/*third time */}

const products2 = [
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
    <div className=' relative w-full md:h-[500px]  h-[300px]     overflow-hidden pl-2 pr-2 '> 
         <img src={images[currentImage]} alt="Banner" className="w-full h-full object-over transition-all duration-700 rounded-lg" />
    </div>


    {/*Shop By Category */}
<section className="w-full bg-white px-5 py-4">
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-3 text-2xl font-medium text-gray-800 text-center md:text-left pt-3">
          Shop By Category
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

<div className="grid grid-cols-2 md:gap-10 max-[700px]:grid-cols-1 md:pb-10 pl-5 pr-5 gap-5 pb-5 pt-5 ">

    <div className="bg-orange-400 flex md:ml-50 md:pl-5 md:pt-7 rounded-lg pl-5 pr-5 pb-5 pt-5  md:h-60">
        <div  className="w-1/2">
        <h1 className="text-white  text-3xl font-medium">Everyday fresh & clean with our products</h1>
        <Link to="/products">
        <button className="md:w-30  w-30 h-7 md:-h10 text-1xl font-medium bg-orange-500 rounded-lg text-white md:mt-10 mt-5 cursor-pointer">Shop More</button>
        </Link>
        </div>
        <div className="w-1/2 ">
            <img src={hero5} alt="hero5" className=" h-50"/>
        </div>
    </div>



    <div className="bg-green-500 md:mr-50 flex md:pl-5 md:pt-7 rounded-lg  pl-5 pr-5 pb-5 pt-5  md:h-60 ">
        <div className="w-1/2">
         <h1 className="text-white  text-3xl font-medium">Make your  breakfast healthy and easy</h1>
         <Link to="/products">
        <button className="md:w-30 w-30 md:-h10 text-1xl font-medium bg-orange-500 rounded-lg text-white md:mt-10 mt-5  cursor-pointer">Shop More</button>
        </Link>
        </div>
         <div className="w-1/2 " >
            <img src={hero6} alt="hero6"className="h-50  " />
        </div>
    </div>

</div>
{/*Featured product */}

 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-white p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
            Featured Products
          </h2>
<Link to="/Products">
          <button className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer">
            View All <ArrowRight size={11} />
          </button>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
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









{/*second section pink bg */}
{/*Featured product */}

 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-gray-100 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Vegetable Products
          </h2>
<Link to="/Products">
          <button className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer">
            View All <ArrowRight size={11} />
          </button>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products1.map((product) => (
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





{/*Third section */}

{/*Featured product */}

 <section className=" w-full  px-3 py-3">
      <div className="rounded-lg  bg-yellow-100 p-3 shadow-sm md:w-full">
        {/* Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold text-emerald-950">
        Your Daily Staples
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



















     <div className="mx-auto grid w-full grid-cols-1 gap-3 p-3 sm:grid-cols-2  ">

       <div  className="w-full overflow-hidden rounded-lg">
        <img src={hero7} alt="hero7" />
        </div>

        <div className="w-full overflow-hidden rounded-lg">
        <img src={hero8} alt="hero8" />
        </div>
      
    </div>


{/*Sepport section */}

<div className="bg-gray-200 mx-auto grid w-full grid-cols-1 md:gap-3 gap-7  p-3 sm:grid-cols-4 md:pl-20  pt-5 pb-5  ">


 <div className="md:w-70    grid w-full grid-cols-2 gap-3 md:pl-3 pl-4 pr-50   ">

        <div className="bg-emerald-700 rounded-full md:w-15 md:h-15 w-15 h-15 md:pl-5 pt-4 pl-4  ">
            <FaTruck  className="text-white md:text-2xl  text-3xl  " />
             </div>

             <div className="md:pl-3 w-70  md:pl-7  ">
             <h3 className="font-medium text-lg">Fast & Free Delivery</h3>
             <span>On orders above ₹499 </span>
             </div>
    </div>










    <div className="md:w-70    grid w-full grid-cols-2 gap-3 md:pl-3 pl-4 pr-50   ">

        <div className="bg-emerald-700 rounded-full md:w-15 md:h-15 w-15 h-15 md:pl-4 md:pt-4 pt-4 pl-4  ">
            <AiFillCheckCircle className="text-white md:text-3xl  text-3xl  " />
             </div>

             <div className="md:pl-3 w-70   md:pl-7  ">
             <h3 className="font-medium text-lg">100% Fresh Product</h3>
             <span>Quality you can turst </span>
             </div>
    </div>


     <div className="md:w-70    grid w-full grid-cols-2 gap-3  md:pl-3 pl-4 pr-50   ">

        <div className="bg-emerald-700 rounded-full md:w-15 md:h-15 w-15 h-15 md:pl-5 md:pt-5 pt-4 pl-4  ">
            <BiSupport className="text-white md:text-2xl  text-3xl  " />
             </div>

             <div className="md:pl-3 w-70 md:pl-7  ">
             <h3 className="font-medium text-lg">24/7 Customer Support</h3>
             <span>We Here to Help </span>
             </div>
    </div>


      <div className="md:w-70    grid w-full grid-cols-2 gap-3  md:pl-3 pl-4 pr-50   ">

        <div className="bg-emerald-700 rounded-full md:w-15 md:h-15 w-15 h-15 md:pl-5 md:pt-5 pt-4 pl-4  ">
            <VscTerminalSecure className="text-white md:text-2xl  text-3xl  " />
             </div>

             <div className="md:pl-3 w-70   md:pl-7 ">
             <h3 className="font-medium text-lg">Secure Payment</h3>
             <span>Multiple option </span>
             </div>
    </div>




</div>

    </>
  )
}

export default Home;