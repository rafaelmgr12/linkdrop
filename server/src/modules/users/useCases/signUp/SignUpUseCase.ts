import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class SignUpUseCase{

    constructor (private usersRepository: IUsersRepository){}


    async execute(data: ICreateUserDTO): Promise<User> {

        const emailAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (emailAlreadyExists) {
            throw new Error("Email already registered");
        }

        const usernameAlreadyExists = await this.usersRepository.findByUsername(data.username);
        if (usernameAlreadyExists) {
            throw new Error("Username already registered");
        }
        
       const user = await this.usersRepository.create(data);

       return user;
       
    }
}