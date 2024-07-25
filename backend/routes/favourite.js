// const router = require("express").Router();
// const User= require("../models/user");
// const { authenticateToken}= require("./userAuth");

// //add book to favourite
// router.put("/favouritebook", authenticateToken, async (req, res) => {
// try {
// const { bookid, id }= req.headers;
// const userData = await User.findById(id);
// const isBookFavourite = userData.favourites.includes (bookid);
// if (isBookFavourite) {
// return res.status(200).json({message: "Book is already in favourites" });
// };
// await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
// return res.status(200).json({ message: "Book added to favourites" });
// } catch (error) { res.status(500).json({ message: "Internal server error" });
// }
// });

// // remove book from favourite
// router.put("/removefromfavourite",authenticateToken, async (req, res) => {
//     try {
//     const { bookid, id } = req.headers;
//     const userData = await User.findById(id);
//     const isBookFavourite = userData.favourites.includes (bookid);
//     if (isBookFavourite) {
//     await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
//     }
//     return res.status(200).json({ message: "Book removed from favourites" }); 
//    } catch (error) { res.status(500).json({ message: "Internal server error" });
// }
// });

// //get Favourite books of a particular user
//  router.get("/favouritelist", authenticateToken,async (req, res) => {
//     try {
//         const {id} = req.headers;
//         const userData= await User.findById(id).populate("favourites");
//         const favouriteBooks= userData.favourites;
//         return res.json({
//         status: "Success",
//         data: favouriteBooks,
//         });
//     }catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "An error occurred" });
//     }
//     });

const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

// Middleware to validate headers
const validateHeaders = (req, res, next) => {
  const { bookid, id } = req.headers;
  if (!bookid || !id) {
    return res.status(400).json({ message: "Missing bookid or id in headers" });
  }
  next();
};

// Add book to favourite
router.put("/favouritebook", authenticateToken, validateHeaders, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const isBookFavourite = userData.favourites.includes(bookid);
    if (isBookFavourite) {
      return res.status(200).json({ message: "Book is already in favourites" });
    }

    await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
    return res.status(200).json({ message: "Book added to favourites" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Remove book from favourite
// Remove book from favourite
router.put("/removefromfavourite/:bookid", authenticateToken, async (req, res) => {
    try {
      const { bookid } = req.params;
      const { id } = req.headers;
      const userData = await User.findById(id);
  
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isBookFavourite = userData.favourites.includes(bookid);
      if (isBookFavourite) {
        await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
        return res.status(200).json({ message: "Book removed from favourites" });
      }
  
      return res.status(404).json({ message: "Book not found in favourites" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
// Get favourite books of a particular user
router.get("/favouritelist", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("favourites");
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const favouriteBooks = userData.favourites;
    return res.json({
      status: "Success",
      data: favouriteBooks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
