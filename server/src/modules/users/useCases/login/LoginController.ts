import {Request, Response} from "express"
import { UsersRepository } from "modules/users/provider/prisma/repository/UsersRepository";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController{

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const loginUseCase = new LoginUseCase(new UsersRepository);

        const token = await loginUseCase.execute({
            username,
            password,
        })
        return response.status(201).json(token)
    }
}