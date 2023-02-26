import { Router } from "express";
import controller from "../controllers/authController";
import { verifyTokenResetPass, verifyToken } from "../middlewares/auth";
const router = Router();

router
//   .route("/users/changePassword")
//   .put(verifyTokenResetPass, controller.changePassword);
// router.route("/users/state/:rowId").put(controller.updateUserState);
// router.route("/users/resetPassword").post(controller.resetPassword);
router.route("/login").post(controller.login);
router
  .route("/users")
  .post(controller.addUser)
//   .get(verifyToken, controller.getUsers);
// router
//   .route("/users/:rowId")
//   .get(verifyToken, controller.getUser)
//   .put(verifyToken, controller.updateUser)
//   .delete(verifyToken, controller.deleteUser);
// router
//   .route("/users/state/:rowId")
//   .put(verifyToken, controller.updateUserState);
// router.post("/login", controller.login);
export default router;
