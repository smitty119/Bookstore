const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./connections/connect");
const User = require("./routes/user");
const Book = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");

app.use(cors()); // Move CORS middleware before defining routes
app.use(express.json());

// Routes
app.use("/users", User);
app.use("/books", Book);
app.use("/favourites", Favourite);
app.use("/cart", Cart);
app.use("/order", Order);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something wrong');
});

// Creating port
app.listen(process.env.PORT, () => {
  console.log(`Server running successfully at port ${process.env.PORT}`);
});
