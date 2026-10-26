
import { useMemo, useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  Star,
  SlidersHorizontal,
  Tag,
  Clock,
  ArrowDownWideNarrow,
  X,
} from "lucide-react";

const dealProducts = [
  {
    id: 1,
    name: "Fresh Red Apples",
    category: "Fruits",
    weight: "1 kg",
    price: 149,
    oldPrice: 199,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Fresh Bananas",
    category: "Fruits",
    weight: "1 dozen",
    price: 45,
    oldPrice: 60,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    category: "Vegetables",
    weight: "500 g",
    price: 49,
    oldPrice: 70,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    category: "Fruits",
    weight: "250 g",
    price: 99,
    oldPrice: 140,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Whole Wheat Atta",
    category: "Staples",
    weight: "5 kg",
    price: 249,
    oldPrice: 310,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Fresh Orange",
    category: "Fruits",
    weight: "1 kg",
    price: 79,
    oldPrice: 110,
    rating: 4.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBwuH7qQ_nxujH7yGkDpkx9gygjFfep-vpcqL7YpEJA&s=10",
  },
  {
    id: 7,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    weight: "1 kg",
    price: 35,
    oldPrice: 50,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Green Kiwi",
    category: "Fruits",
    weight: "3 pieces",
    price: 89,
    oldPrice: 120,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop",
  },
];

const categories = ["All Deals", "Fruits", "Vegetables", "Staples"];

export default function Deals({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Deals");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const products = useMemo(() => {
    let result = dealProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Deals" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sort === "discount") {
      result = [...result].sort(
        (a, b) =>
          (b.oldPrice - b.price) / b.oldPrice -
          (a.oldPrice - a.price) / a.oldPrice
      );
    }

    return result;
  }, [search, category, sort]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleAddToCart = (product) => {
    if (typeof addToCart === "function") {
      addToCart(product);
    } else {
      setCartItems((current) => [...current, product]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <section className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-600 px-4 py-10 text-white sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                <Tag size={16} /> FreshBasket Special Offers
              </p>
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Deals You’ll Love!
              </h1>
              <p className="mt-3 max-w-xl text-sm text-emerald-50 sm:text-base">
                Save more on your daily groceries, fresh fruits, vegetables,
                and household essentials.
              </p>
              <a
                href="#deal-products"
                className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50"
              >
                Shop Deals <ShoppingCart size={18} className="ml-2" />
              </a>
            </div>

            <div className="flex items-center gap-3 self-start rounded-2xl border border-white/20 bg-white/10 p-4 sm:self-auto">
              <Clock size={32} />
              <div>
                <p className="font-bold">Daily Savings</p>
                <p className="text-sm text-emerald-50">
                  Great deals on groceries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-3 py-7 sm:px-6 lg:px-8">
        {/* Deal highlights */}
        <div className="mb-7 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["Fresh Deals", "On daily groceries"],
            ["Fruits & Veggies", "Everyday savings"],
            ["Staple Essentials", "Kitchen favourites"],
            ["Easy Shopping", "Add to cart"],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-emerald-100 bg-white p-4"
            >
              <h3 className="font-bold text-emerald-800">{title}</h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div
          id="deal-products"
          className="mb-5 flex flex-wrap items-center justify-between gap-3"
        >
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Today’s Best Deals
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {products.length} products available
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowFilters((value) => !value)}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 md:hidden"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* Search and sorting */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">
            <Search size={19} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search deals and products..."
              className="w-full py-3 text-sm outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3">
            <ArrowDownWideNarrow size={18} className="text-gray-500" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full bg-transparent py-3 text-sm outline-none"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="discount">Highest discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div
          className={`mb-6 flex flex-wrap gap-2 ${
            showFilters ? "flex" : "hidden md:flex"
          }`}
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-emerald-700 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-emerald-600 hover:text-emerald-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-4">
            {products.map((product) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );

              return (
                <article
                  key={product.id}
                  className="group min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
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
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={`${
                        wishlist.includes(product.id)
                          ? "Remove from"
                          : "Add to"
                      } wishlist: ${product.name}`}
                      className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm"
                    >
                      <Heart
                        size={17}
                        className={
                          wishlist.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-3 sm:p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700 sm:text-xs">
                      {product.category}
                    </p>

                    <h3 className="mt-1 truncate text-sm font-bold text-gray-900 sm:text-base">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {product.weight}
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                      <Star
                        size={14}
                        fill="#eab308"
                        className="text-yellow-500"
                      />
                      <span className="text-xs font-semibold text-gray-600">
                        {product.rating}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-base font-extrabold text-emerald-800">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ₹{product.oldPrice}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="mt-1.5 w-full rounded-sm bg-emerald-700 px-1 py-1.5 text-[9px] font-semibold text-white transition hover:bg-emerald-800 cursor-pointer"
                    >
                    
                      Add to Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
            <Search size={35} className="mx-auto text-gray-400" />
            <h3 className="mt-3 font-bold text-gray-800">
              No deals found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try another search or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Deals");
              }}
              className="mt-4 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Cart summary for standalone demo */}
        {!addToCart && (
          <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900">
            <span className="font-bold">Demo cart:</span> {cartItems.length}{" "}
            items added in this session.
          </div>
        )}
      </div>
    </main>
  );
}
