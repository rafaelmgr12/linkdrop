import { ICreateLinkDTO } from "modules/links/dtos/ICreateLinkDTO";
import { Link } from "modules/links/entity/Link";
import { ILinkRepository } from "modules/links/repositories/ILinkRepository";
import { UsersRepository } from "modules/users/provider/prisma/repository/UsersRepository";

export class CreateLinkUseCase {
  constructor(private linkRepository: ILinkRepository, private usersRepository: UsersRepository) {}

  async execute(data: ICreateLinkDTO): Promise<Link> {

    const link = await this.linkRepository.create(data);

    return link;
  }
}
