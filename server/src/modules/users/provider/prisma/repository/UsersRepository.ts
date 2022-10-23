import { prisma } from "./../../../../../config/prismaClient";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "modules/users/dtos/IUpdateUserDTO";
import { User } from "modules/users/entities/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const userAccount = new User(
      data.name,
      data.username,
      data.email,
      data.password
    );

    await prisma.user.create({
      data: {
        name: userAccount._name,
        username: userAccount._username,
        email: userAccount._email,
        password: userAccount._password,
      },
    });

    return userAccount;
  }
  async update(data: IUpdateUserDTO): Promise<void> {
    await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  }
  async findByEmail(email: string): Promise<any> {
    return await prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
  async findByUsername(username: string): Promise<any> {
    return await prisma.user.findFirst({
      where: {
        username,
      },
    });
  }
}
