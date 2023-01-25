import { SignUpController } from "./modules/users/useCases/signUp/SignUpController";
import { LoginController } from "./modules/users/useCases/login/LoginController";
import { ListAllLinksController } from "./modules/links/useCase/list/ListAllLinksController";
import { CreateLinkController } from "./modules/links/useCase/create/CreateLinkController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

import { Router } from "express";

const router = Router();

const signUpController = new SignUpController();
const loginController = new LoginController();

const listAllLinksController = new ListAllLinksController();
const createLinkController = new CreateLinkController();

router.post("/signup", signUpController.handle);
router.post("/login", loginController.handle);


router.get("/links", ensureAuthenticated,listAllLinksController.handle);
router.get("/links", ensureAuthenticated,createLinkController.handle);

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
