
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const [loading, setLoading] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.state.trim() ||
      !formData.pincode.trim()
    ) {
      alert("Please fill all customer details");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const orderData = {
      customerName: formData.name.trim(),
      phone: formData.mobile.trim(),
      address: `${formData.address.trim()}, ${formData.city.trim()}, ${formData.state.trim()} - ${formData.pincode.trim()}`,
      payment: formData.payment,
      items: cart.map((item) => ({
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
      })),
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Order could not be placed");
      }

      const savedOrder = {
        ...result.order,
        orderId: result.order?._id || "ORD" + Date.now(),
        customer: formData,
        products: cart,
        totalPrice: result.order?.totalAmount ?? totalPrice,
        orderDate: new Date().toLocaleDateString("en-IN"),
      };

      localStorage.setItem("order", JSON.stringify(savedOrder));
      localStorage.removeItem("cart");

      alert("Order placed successfully!");
      navigate("/order-success");
    } catch (error) {
      console.error("Order submission error:", error);
      alert(
        error.message === "Failed to fetch"
          ? "Backend server is not running. Please start the backend."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CUSTOMER DETAILS */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">
              Customer Details
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-4"
                required
              />

              <h3 className="text-xl font-bold mb-3">
                Payment Method
              </h3>

              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg mb-6"
              >
                <option value="Cash on Delivery">
                  Cash on Delivery
                </option>
                <option value="UPI">UPI</option>
                <option value="Credit/Debit Card">
                  Credit / Debit Card
                </option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 py-3 rounded-lg font-bold"
              >
                {loading ? "Placing Order..." : "Confirm Order"}
              </button>
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-red-500">
                Your cart is empty.
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={item.id ?? item._id ?? index}
                  className="flex gap-4 border-b py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />

                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p className="font-bold">
                      ₹
                      {(Number(item.price) * Number(item.quantity))
                        .toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between mt-6 text-xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
