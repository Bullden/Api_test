import { Router } from "express";
import auth from "./auth/auth.route";
import users from "./users/user.route";
import usersRoles from "./users-roles/users-roles.route";
import usersInRoles from "./usersInRoles/usersInRoles.route";
import book from "./books/books.route";
import usersGet from "./usersGet/usersGet.route";

const router: Router = Router();

router.use("/env", (req, res) => {
  res.json(process.env);
});
router.use("/", auth);
router.use("/users", users);
router.use("/usersInRoles",usersInRoles)
router.use("/usersRoles",usersRoles)
router.use('/books', book);
router.use('/users',usersGet)

export default router;
