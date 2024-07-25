const router = require("express").Router();
const User = require("../models/user");
const jwt =require("jsonwebtoken");
const Book = require("../models/book");
const {authenticateToken}=require("./userAuth");

//add book -admin
router.post("/addbook", authenticateToken,  async (req, res) => {
    try {
      const { id } = req.headers;
      if (!id) {
        return res.status(400).json({ message: "Invalid request" });
      }
      
      const user = await User.findById(id);
      if (user.role !== "admin") {
        return res.status(400).json({ message: "You are not having access to perform admin work" });
      }
      
      const book = new Book({
        url: req.body.url,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        desc: req.body.desc,
        language: req.body.language,
      });
      await book.save();
      res.status(200).json({ message: "book added successfully" });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  });

//update book
router.put("/updatebook",authenticateToken, async (req, res) => {
    try {
    const { bookid } = req.headers;  
    await Book.findByIdAndUpdate(bookid, {
    url: req.body.url,    
    title: req.body.title,
    author: req.body.author, 
    price: req.body.price,  
    desc: req.body.desc,  
    language: req.body.language,   
    });
    
    return res.status(200).json({message: "Book Updated successfully"});
} catch (error) {
    res.status(500).json({ message: "error occurred" });
  }
});
//delete book
router.delete("/deletebook",authenticateToken, async (req, res) => {
    try {
    const { bookid } = req.headers;
    await Book.findByIdAndDelete(bookid);
    return res.status(200).json({message: "Book deleted successfully!"});
    } catch (error) { 
    return res.status(500).json({ message: "An error occurred" });
    } 
    });

//get all books
router.get("/allbooks", async (req, res) => {
  try {
  const books = await Book.find().sort({ createdAt: -1 });
  return res.json({
  status: "Success",
  data: books,
   });
  } catch (error) {
  console.log(error);
  return res.status(500).json({ message: "An error occurred" });
  }
  });

  //get recently added books limit 4

router.get("/recentbooks", async (req, res) => {
  try {
  const books=await Book.find().sort({ createdAt: -1}).limit(4);
  return res.json({
  status: "Success",
  data: books, 
  });
  } catch (error) {
  console.log(error);
  return res.status(500).json({ message: "An error occurred" });
  }
  });

  //get book by id

router.get("/bookbyid/:id", async (req, res) => {
  try {
  const {id} = req.params;
  const book = await Book.findById(id);
  return res.json({
  status: "Success",
  data: book,
  });
  } catch (error) {
  console.log(error);
  return res.status(500).json({ message: "An error occurred" });
  }
  });
module.exports = router;
