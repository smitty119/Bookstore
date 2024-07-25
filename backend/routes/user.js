const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");


// sign up
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    // check username length more than 3
    if (username.length < 4) {
      return res
       .status(400)
       .json({ message: "username length should be greater than 3" });
    }
    // check username already exist/not
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res
       .status(400)
       .json({ message: "username already exist" });
    }
    // check email already exist/not
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
       .status(400)
       .json({ message: "Email already exist" });
    }
    // check password length
    if (password.length <= 5) {
      return res
       .status(400)
       .json({ message: "Password length should be greater than 5" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
      address: address,
    });
    await newUser.save();
    return res.status(200).json({ message: "signup successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

// signin
router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      res.status(400).json({ message: "invalid credentials" });
    }
    const isValid = await bcrypt.compare(password, existingUser.password);
    if (isValid) {

    const  authClaims=[
        {
            name:existingUser.username
        },
        {
            role:existingUser.role
        },
    ];
    const token=jwt.sign({authClaims},"bookStore123",{
       expiresIn:"40d" 
    });
      res.status(200).json({ 
        id:existingUser._id,
        role:existingUser.role, 
        token:token,
    });
    } else {
      res.status(400).json({ message:"invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
});

//get user informations
router.get("/get-user-information", authenticateToken,async(req,res)=>{
    try {
    const{id}=req.headers;
    const data =await User.findById(id);
    return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "internal server error" });    
    }
})

//update address

router.put("/updateaddress", authenticateToken, async (req, res) => {
  try{
  const { id } = req.headers;
  const { address } = req.body;
  await User.findByIdAndUpdate(id, { address: address });
  return res.status(200).json({ message: "Address updated successfully" });
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;