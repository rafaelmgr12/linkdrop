import{ prisma } from "config/prismaClient"
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "modules/users/dtos/IUpdateUserDTO";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";


export class UsersRepository implements IUsersRepository {
    create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(data: IUpdateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    findByUsername(username: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


}