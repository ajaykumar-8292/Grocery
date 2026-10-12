import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
import image16 from "../assets/image15.jfif";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

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
    setCart(updatedCart);
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + change,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const products = [
    {
      id: 1,
      name: "Toor Dal",
      image: image,
      price: 540,
      oldPrice: 799,
      rating: 2.1,
    },
    {
      id: 2,
      name: "Chana Dal",
      image: image1,
      price: 520,
      oldPrice: 699,
      rating: 2.4,
    },
    {
      id: 3,
      name: "Cooking Oil",
      image: image2,
      price: 155,
      oldPrice: 699,
      rating: 2,
    },
    {
      id: 4,
      name: "Turmeric Powder",
      image: image3,
      price: 155,
      oldPrice: 699,
      rating: 2,
    },
    {
      id: 5,
      name: "Red Chilli Powder",
      image: image4,
      price: 45,
      oldPrice: 69,
      rating: 3,
    },
    {
      id: 6,
      name: "Salt",
      image: image5,
      price: 60,
      oldPrice: 69,
      rating: 2.5,
    },
    {
      id: 7,
      name: "Apple",
      image: image6,
      price: 139,
      oldPrice: 199,
      rating: 2.7,
    },
    {
      id: 8,
      name: "Banana",
      image: image7,
      price: 125,
      oldPrice: 139,
      rating: 3.6,
    },
    {
      id: 9,
      name: "Orange",
      image: image8,
      price: 50,
      oldPrice: 79,
      rating: 3.9,
    },
    {
      id: 10,
      name: "Mango",
      image: image9,
      price: 80,
      oldPrice: 99,
      rating: 3.7,
    },
    {
      id: 11,
      name: "Potato",
      image: image10,
      price: 30,
      oldPrice: 39,
      rating: 3.4,
    },
    {
      id: 12,
      name: "Onion",
      image: image11,
      price: 40,
      oldPrice: 49,
      rating: 2.4,
    },
    {
      id: 13,
      name: "Tomato",
      image: image12,
      price: 35,
      oldPrice: 49,
      rating: 4.3,
    },
    {
      id: 14,
      name: "Carrot",
      image: image13,
      price: 60,
      oldPrice: 79,
      rating: 2.4,
    },
    {
      id: 15,
      name: "Cabbage",
      image: image14,
      price: 40,
      oldPrice: 69,
      rating: 4.0,
    },
    {
      id: 16,
      name: "Cauliflower",
      image: image15,
      price: 59,
      oldPrice: 69,
      rating: 3.3,
    },
    
  ];

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* CART */}
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* CART PRODUCTS */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow p-4"
                >
                  <div className="flex flex-col md:flex-row gap-5">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full md:w-40 h-40 object-contain"
                    />

                    <div className="flex-1">

                      <h2 className="text-xl font-bold">
                        {product.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {product.description}
                      </p>

                      <p className="text-green-600 font-bold mt-2">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <div className="flex items-center gap-3 mt-4">

                        <button
                          onClick={() =>
                            updateQuantity(product.id, -1)
                          }
                          className="bg-gray-200 px-4 py-2 rounded"
                        >
                          -
                        </button>

                        <span className="font-bold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(product.id, 1)
                          }
                          className="bg-gray-200 px-4 py-2 rounded"
                        >
                          +
                        </button>

                      </div>

                      <p className="font-bold mt-3">
                        Total: ₹
                        {(
                          product.price * product.quantity
                        ).toLocaleString("en-IN")}
                      </p>

                      <button
                        onClick={() =>
                          removeProduct(product.id)
                        }
                        className="text-red-500 mt-3"
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">

              <h2 className="text-2xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Delivery</span>
                <span className="text-green-600">
                  FREE
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <Link
  to="/checkout"
  className="block w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-bold mt-6 text-center"
>
  Place Order
</Link>

            </div>
          </div>
        )}

        {/* MANY PRODUCT CARDS */}
        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            More Products
          </h2>

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
                    onClick={() => addToCart(product)}
                    className="w-full bg-green-700 hover:bg-green-800 py-3 rounded-lg font-bold mt-4 cursor-pointer"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;