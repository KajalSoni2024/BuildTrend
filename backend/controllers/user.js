const { execute } = require("../dbConnections/executeQuery");
const { findByEmail } = require("../services/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email, contact, address, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log(req.body, salt);
  const hashPassword = await bcrypt.hash(password, salt);
  let query =
    "insert into users (u_name,u_email,u_contact,u_address,u_password,u_role) values (?,?,?,?,?,?);";
  try {
    const result = await execute(query, [
      name,
      email,
      contact,
      address,
      hashPassword,
      role,
    ]);
    if (result) {
      res.json(result);
    }
  } catch (err) {
    console.log(err);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await findByEmail(email);
  if (result.length == 1) {
    const isEqual = await bcrypt.compare(password, result[0].u_password);
    if (isEqual) {
      const payload = {
        id: result[0].u_id,
        email: result[0].u_email,
        role: result[0].u_role,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY);
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 2,
        httpOnly: true,
      });
      const role = result[0].u_role;
      const name = result[0].u_name;
      const img = result[0].u_img;
      res.json({ token, role, name, img });
    }
  }
};

const forgetPassword = async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await findByEmail(email);
  if (user.length == 1) {
    const id = user[0].u_id;
    const query = "update users set u_password = ? where u_id=?;";

    const result = await execute(query, [hashPassword, id]);
    res.json(result);
  } else {
    res.json(err);
  }
};
const logout = async (req, res) => {
  res.clearCookie("token");
  res.json(true);
};
const getUserDetails = async (req, res) => {
  const user_id = req.user[0].u_id;
  try {
    const query = "select * from users where u_id=?; ";
    const result = await execute(query, [user_id]);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
const addImg = async (req, res) => {
  try {
    const imgPath = "/uploads/" + req.file.filename;
    const query = "update users set u_img=? where u_id=?;";
    const result = await execute(query, [imgPath, req.body.user_id]);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  const { u_name, u_email, u_address, u_contact, u_id } = req.body;
  try {
    const query =
      "update users set u_name=?, u_email=?, u_contact=?, u_address=? where u_id=?;";
    const result = await execute(query, [
      u_name,
      u_email,
      u_contact,
      u_address,
      u_id,
    ]);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  registerUser,
  loginUser,
  forgetPassword,
  logout,
  getUserDetails,
  addImg,
  updateUser,
};
