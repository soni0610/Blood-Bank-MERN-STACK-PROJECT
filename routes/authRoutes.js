const express = require("express");
const { registerController, loginController, currentUserController } = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");
/*const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
*/

//router object
const router = express.Router();

/*Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddleware,
  getDonarsListController
);
//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddleware,
  deleteDonarController
);
*/
//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);



//EXPORT
module.exports = router;
