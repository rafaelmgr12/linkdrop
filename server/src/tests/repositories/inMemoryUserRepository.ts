import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "modules/users/dtos/IUpdateUserDTO";
import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  public users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User(data.name, data.username, data.email, data.password);

    this.users.push(user);
  }
  async update(data: IUpdateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<any> {
    return this.users.find((user) => user._email === email);
  }
  async findByUsername(username: string): Promise<any> {
    return this.users.find((user) => user._username === username);
  }
}
