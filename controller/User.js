const database = require('../database/db');

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

const insertUserdata = async (req, res) => {
  const db = await database();
  const collection = db.collection('User');
  const result = await collection.insertOne(req.body);

  if (result.acknowledged == true) {
    res.json({
      message: 'User added successfully',
      data: result
    });
  } else {
    res.status(500).json({ message: 'Failed to add User' });
  }
};

const updateUserdata = async (req, res) => {
  const db = await database();
  const collection = db.collection('User');

  let prmid = parseInt(req.params.id);

  const result = await collection.updateOne(
    { id: prmid },
    { $set: req.body }
  );

  if (result.modifiedCount > 0) {
    res.json({
      message: 'User update successfully',
      data: result
    });
  } else {
    res.status(500).json({ message: 'Failed to update User' });
  }
};

const deleteUserdata = async (req, res) => {
  try {
    const db = await database();
    const collection = db.collection('User');

    let prmid = parseInt(req.params.id);

    const result = await collection.deleteOne({ id: prmid });

    if (result.deletedCount > 0) {
      res.json({
        message: 'User deleted successfully',
        data: result
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
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
      res.status(200).json({
        message: "Login Successful",
        user
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials"
      });
    }

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};


module.exports = {
  getUserdata,
  insertUserdata,
  updateUserdata,
  deleteUserdata,
  loginUser // 👈 add kita
};