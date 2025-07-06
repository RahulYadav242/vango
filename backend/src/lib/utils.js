import jwt from "jsonwebtoken";



export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",     // ✅ HTTPS only
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // ✅ allow cross-site
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
