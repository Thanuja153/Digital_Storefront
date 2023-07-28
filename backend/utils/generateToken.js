import jwt from "jsonwebtoken";
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "400d",
  });
  //set jwt as HTTP only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 400 * 24 * 60 * 60 * 1000, //400 days
  });
};

export default generateToken;
