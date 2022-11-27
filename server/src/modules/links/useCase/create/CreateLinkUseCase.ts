import { ILinkRepository } from '../../repositories/ILinkRepository';
import { ICreateLinkDTO } from '../../dtos/ICreateLinkDTO';
import { Link } from '../../entity/Link';


export class CreateLinkUseCase {
  constructor(private linkRepository: ILinkRepository) {}

  async execute(data: ICreateLinkDTO): Promise<Link> {

    const link = await this.linkRepository.create(data);

    return link;
  }
}
