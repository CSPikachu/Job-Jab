const authController = {};

authController.setCookie = (req, res, next) => {
  console.log("were in the setcookie middleware");
};

authController.createUser = (req, res, next) => {
  console.log("were in the createuser middleware");
};

module.exports = authController;
