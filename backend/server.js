
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Contact = require("./models/Contact");
const Order = require("./models/orders");




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FreshBasket Backend is running!");
});


app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, address, products, message } = req.body;

    if (!name || !phone || !email || !address || !products) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const newContact = new Contact({
      name,
      phone,
      email,
      address,
      products,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact form saved successfully!",
    });
  } catch (error) {
    console.error("Contact save error:", error.message);
    res.status(500).json({
      success: false,
      message: "Unable to save contact form.",
    });
  }
});




app.post("/api/orders", async (req, res) => {
  try {
    const { customerName, phone, address, payment, items } = req.body;

    if (
      !customerName?.trim() ||
      !phone?.trim() ||
      !address?.trim() ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Customer details and products are required.",
      });
    }

    const validPayments = [
      "Cash on Delivery",
      "UPI",
      "Credit/Debit Card",
    ];

    if (payment && !validPayments.includes(payment)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
    }

    const orderItems = items.map((item) => ({
      name: String(item.name || "").trim(),
      price: Number(item.price),
      quantity: Number(item.quantity),
    }));

    const invalidItem = orderItems.some(
      (item) =>
        !item.name ||
        !Number.isFinite(item.price) ||
        item.price < 0 ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
    );

    if (invalidItem) {
      return res.status(400).json({
        success: false,
        message: "Invalid product details.",
      });
    }

    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      payment: payment || "Cash on Delivery",
      items: orderItems,
      totalAmount,
    });

    console.log("Order saved to MongoDB:", order._id);

    return res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order,
    });
  } catch (error) {
    console.error("Order save error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save order.",
    });
  }
});



async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}



startServer();
