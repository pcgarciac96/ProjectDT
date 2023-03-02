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
router.route("/users").post(controller.addUser);
router.route("/getUser").get(controller.getUser);

export default router;
