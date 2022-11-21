import { SignUpController } from "./modules/users/useCases/signUp/SignUpController";
import { LoginController } from "./modules/users/useCases/login/LoginController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

import { Router } from "express";

const router = Router();

const signUpController = new SignUpController();
const loginController = new LoginController();

router.post("/signup", signUpController.handle);
router.post("/login", loginController.handle);

router.get("/courses",ensureAuthenticated ,(request, response) => {
    return response.json([
      { id: 1, name: "NodeJS" },
      { id: 2, name: "ReactJS" },
      { id: 3, name: "React Native" },
      { id: 4, name: "Flutter" },
      { id: 5, name: "Elixir" },
    ]);
  });

export { router };
