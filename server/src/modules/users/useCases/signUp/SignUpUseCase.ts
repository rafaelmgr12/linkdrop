import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class SignUpUseCase{

    constructor (private usersRepository: IUsersRepository){}


    async execute(data: ICreateUserDTO): Promise<void> {
       throw new Error("Method not implemented.");
       
    }
}