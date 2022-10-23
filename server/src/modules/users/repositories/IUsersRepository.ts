import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<void>;
  findById(id:string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
}
