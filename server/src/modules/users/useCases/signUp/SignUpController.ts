import { Request, Response } from "express";
import { UsersRepository } from "modules/users/provider/prisma/repository/UsersRepository";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { SignUpUseCase } from "./SignUpUseCase";

export class SignUpController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, email, password } = request.body;
    
        const signUpUseCase = new SignUpUseCase(new UsersRepository);

        const user = await signUpUseCase.execute({
            name,
            username,
            email,
            password,
        });
        return response.status(201).json(user);
    }
}