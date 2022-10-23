import { SignUpController } from './modules/users/useCases/signUp/SignUpController';
import { Router } from "express";

const router = Router();

const signUpController = new SignUpController();

router.post('/user', signUpController.handle);

export { router };