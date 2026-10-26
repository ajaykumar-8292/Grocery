
import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  ShieldCheck,
  Plus,
  Minus,
  Pill,
  Bandage,
  Stethoscope,
  Thermometer,
  Activity,
} from "lucide-react";

const pharmacyProducts = [
  {
    id: 1,
    name: "Digital Thermometer",
    category: "Health Devices",
    price: 199,
    oldPrice: 299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 2,
    name: "First Aid Bandage Kit",
    category: "First Aid",
    price: 149,
    oldPrice: 199,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 3,
    name: "Face Masks",
    category: "Personal Care",
    price: 99,
    oldPrice: 149,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 4,
    name: "Digital Blood Pressure Monitor",
    category: "Health Devices",
    price: 1299,
    oldPrice: 1599,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 5,
    name: "Hand Sanitizer",
    category: "Personal Care",
    price: 79,
    oldPrice: 99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 6,
    name: "First Aid Supplies",
    category: "First Aid",
    price: 249,
    oldPrice: 349,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 7,
    name: "Health Monitoring Device",
    category: "Health Devices",
    price: 699,
    oldPrice: 899,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop",
    prescription: false,
  },
  {
    id: 8,
    name: "Personal Care Essentials",
    category: "Personal Care",
    price: 199,
    oldPrice: 249,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop",
    prescription: false,
  },
];

const categories = [
  { name: "All Products", icon: Pill },
  { name: "Health Devices", icon: Activity },
  { name: "First Aid", icon: Bandage },
  { name: "Personal Care", icon: Stethoscope },
];

export default function Pharmacy({ addToCart }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = pharmacyProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, activeCategory, sort]);

  const handleAddToCart = (product) => {
    if (typeof addToCart === "function") {
      addToCart(product);
      return;
    }

    setCart((current) => {
      const exists = current.find((item) => item.id === product.id);

      if (exists) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-800 via-emerald-700 to-green-600 px-4 py-10 text-white sm:px-8 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
              <ShieldCheck size={17} />
              Your Health, Our Priority
            </div>

            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Pharmacy & Healthcare
            </h1>

            <p className="mt-3 max-w-xl text-sm text-emerald-50 sm:text-base">
              Explore healthcare essentials, first aid supplies, personal care
              and health monitoring devices.
            </p>

            <a
              href="#pharmacy-products"
              className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 font-bold text-emerald-800 hover:bg-emerald-50"
            >
              Explore Products
            </a>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-white/20 bg-white/10 p-4 sm:self-auto">
            <ShoppingCart size={30} />
            <div>
              <p className="font-bold">Your Cart</p>
              <p className="text-sm text-emerald-50">
                {cartCount} items added
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-3 py-7 sm:px-6 lg:px-8">
        {/* Category cards */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                    activeCategory === category.name
                      ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                      : "border-gray-200 bg-white text-gray-700 hover:border-emerald-400"
                  }`}
                >
                  <Icon size={25} />
                  <span className="text-sm font-semibold">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Search and sort */}
        <section id="pharmacy-products">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Healthcare Essentials
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {filteredProducts.length} products available
              </p>
            </div>

            <span className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700">
              <Heart size={17} />
              {wishlist.length} saved
            </span>
          </div>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">
              <Search size={19} className="text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search healthcare products..."
                className="w-full py-3 text-sm outline-none"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.oldPrice - product.price) / product.oldPrice) *
                    100
                );

                const saved = wishlist.includes(product.id);
                const cartItem = cart.find(
                  (item) => item.id === product.id
                );

                return (
                  <article
                    key={product.id}
                    className="group min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative flex h-36 items-center justify-center bg-white p-3 sm:h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />

                      

                      <button
                        type="button"
                        onClick={() =>
                          setWishlist((current) =>
                            saved
                              ? current.filter((id) => id !== product.id)
                              : [...current, product.id]
                          )
                        }
                        aria-label={
                          saved ? "Remove from wishlist" : "Add to wishlist"
                        }
                        className="absolute right-2 top-2 rounded-full bg-white p-2 shadow"
                      >
                        <Heart
                          size={17}
                          className={
                            saved
                              ? "fill-red-500 text-red-500"
                              : "text-gray-500"
                          }
                        />
                      </button>
                    </div>

                    <div className="p-3 sm:p-4">
                      <p className="text-[10px] font-bold uppercase text-emerald-700 sm:text-xs">
                        {product.category}
                      </p>

                      <h3 className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={14}
                          fill="#eab308"
                          className="text-yellow-500"
                        />
                        <span className="text-xs text-gray-600">
                          {product.rating}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-emerald-800">
                          ₹{product.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.oldPrice}
                        </span>
                      </div>

                      {cartItem ? (
                        <div className="mt-3 flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, -1)}
                            aria-label="Decrease quantity"
                            className="rounded p-1 text-emerald-800"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm font-bold">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, 1)}
                            aria-label="Increase quantity"
                            className="rounded p-1 text-emerald-800"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className="mt-1.5 w-full rounded-sm bg-emerald-700 px-1 py-1.5 text-[9px] font-semibold text-white transition hover:bg-emerald-800 cursor-pointer"
                        >
                          
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
              <Search className="mx-auto text-gray-400" size={35} />
              <h3 className="mt-3 font-bold text-gray-800">
                No products found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try another product name or category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Products");
                }}
                className="mt-4 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        <p className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
          <strong>Important:</strong> This is a sample storefront. Product
          details, prices, ratings and images are illustrative. This page does
          not provide medical advice. Medicines requiring a prescription
          should only be sold after valid prescription verification and
          applicable legal checks.
        </p>
      </div>
    </main>
  );
}
