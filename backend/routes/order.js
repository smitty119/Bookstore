

const router = require("express").Router();
const User = require("../models/user");
const Book = require("../models/book");
const Order = require("../models/order");
const { authenticateToken } = require("./userAuth");

// Place order
router.post("/placeorder", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;

    if (!Array.isArray(order) || order.length === 0) {
      return res.status(400).json({ message: "Order is empty" });
    }

    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromDb = await newOrder.save();

      // Save order in user model and clear cart
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDb._id },
        $pull: { cart: orderData._id },
      });
    }

    return res.status(201).json({
      status: "Success",
      message: "Order placed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get order history of a particular user
router.get("/order-history", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const ordersData = userData.orders.reverse();
    return res.status(200).json({
      status: "Success",
      data: ordersData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get all orders (Admin)
router.get("/all-orders", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.headers.id);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden" });
    }

    const orders = await Order.find()
      .populate({ path: "book" })
      .populate({ path: "user" })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Update order status (Admin)
router.put("/update-status/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ["Pending", "Shipped", "Delivered", "Cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    await Order.findByIdAndUpdate(id, { status });

    return res.status(200).json({
      status: "Success",
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
