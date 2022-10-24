import { IRequesUserDTO } from './../../dtos/IResquestUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from './../../../../errors/AppError';


export class LoginUserCase{
    constructor(
        private usersRepository: IUsersRepository,
    ){}

    async execute(data: IRequesUserDTO): Promise<string>{
       throw new AppError("Method not implemented.");        
    }
}