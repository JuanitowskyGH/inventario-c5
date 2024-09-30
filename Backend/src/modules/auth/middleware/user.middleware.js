const { User } = require("../../index.model");

const authUser = async (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized to actions" });
  }

  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; 
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authUser;