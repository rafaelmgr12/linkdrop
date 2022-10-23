import { AppError } from "../../errors/AppError";
import { ICreateUserDTO } from "../../modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../modules/users/dtos/IUpdateUserDTO";
import { User } from "../../modules/users/entities/User";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {

  public users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user = new User(data.name, data.username, data.email, data.password);

    this.users.push(user);

    return user;
  }
  async update(data: IUpdateUserDTO): Promise<void> {
    const user = this.users.find((user) => user._id === data.id);

    if (!user) {
      throw new AppError("User not found");
    }
    user._name = data.name;
    user._username = data.username;
    user._email = data.email;
    user._updated_at = new Date();
  }

  async findByEmail(email: string): Promise<any> {
    return this.users.find((user) => user._email === email);
  }
  async findByUsername(username: string): Promise<any> {
    return this.users.find((user) => user._username === username);
  }
  async findById(id: string): Promise<User> {
    const user =  this.users.find((user) => user._id === id);
    if (!user) {
      throw new AppError("User not found");
    }
    return user;
  }
}
