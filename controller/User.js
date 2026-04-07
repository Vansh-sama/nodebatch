const database = require('../database/db');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey"; 

const getUserdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('User');
    const result = await collection.find({}).toArray();
    res.json({
      message: 'User records retrieved successfully',
      data: result
    });
  } catch (err) {
    console.error('Error fetching User data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// 🔥 LOGIN FUNCTION ADD
const loginUser = async (req, res) => {
  try {
    console.log("BODY:", req.body); // debug

    const { username, password } = req.body;

    const db = await database();
    const collection = db.collection('User');

    const user = await collection.findOne({ username, password });

    if (user) {
           const token = jwt.sign(
      {username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

      res.json({
        success: true,
        message: "Login successful",
        token:token
      });
    } else {
      res.json({
        success: false,
        message: "Invalid username or password"
      });
    }


  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];

  // ✅ pehle header check kar
  if (!header) {
    return res.status(403).json({
      message: "Token required"
    });
  }

  // ✅ phir token nikaal
  const token = header.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    req.user = decoded;
    console.log("Decoded token:", decoded);
    next();
  });
};


module.exports = {
  getUserdata,
  loginUser,verifyToken
};