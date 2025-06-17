const adminAuth = (req, res, next) => {
  const token = "abc";
  const isAutharizedAdmin = token === "abc";
  if (isAutharizedAdmin) {
    next();
  } else {
    res.status(401).send("Unoutharized Admin");
  }
};

const userAuth = (req, res, next) => {
  const token = "abc";
  const isAutharizedUser = token === "abc";
  if (isAutharizedUser) {
    next();
  } else {
    res.status(401).send("Unoutharized User");
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
