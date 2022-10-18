import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  update(data: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
  findByEmail(email: string): Promise<any>;
  findByUsername(username: string): Promise<any>;
}
