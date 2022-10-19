import { prisma } from "config/prismaClient";
import { ICreateUserDTO } from "modules/users/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "modules/users/dtos/IUpdateUserDTO";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {

        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,

      },
    });
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
  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
  findByEmail(email: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findByUsername(username: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
