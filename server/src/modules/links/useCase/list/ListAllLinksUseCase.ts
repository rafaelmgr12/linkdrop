import { ILinkRepository } from '../../repositories/ILinkRepository';
import { ICreateLinkDTO } from '../../dtos/ICreateLinkDTO';
import { Link } from '../../entity/Link';


export class ListAllLinksUseCase {
  constructor(
    private linksRepository: ILinkRepository,
  ) {}

  async execute(): Promise<Link[]> {
    const links = await this.linksRepository.findAll();

    return links;
  }
}