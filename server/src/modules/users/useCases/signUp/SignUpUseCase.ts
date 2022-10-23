import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class SignUpUseCase{

    constructor (private usersRepository: IUsersRepository){}


    async execute(data: ICreateUserDTO): Promise<User> {
       const user = await this.usersRepository.create(data);

       return user;
       
    }
}