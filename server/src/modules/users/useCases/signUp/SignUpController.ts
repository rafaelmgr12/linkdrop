import { Request, Response } from "express";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { SignUpUseCase } from "./SignUpUseCase";

export class SignUpController {
    private usersRepository: IUsersRepository;
    
    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository;
    }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, email, password } = request.body;
    
        const signUpUseCase = new SignUpUseCase(this.usersRepository);

        const user = await signUpUseCase.execute({
            name,
            username,
            email,
            password,
        });
        return response.status(201).json(user);
    }
}