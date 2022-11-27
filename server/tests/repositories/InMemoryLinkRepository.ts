import { ICreateLinkDTO } from "../../src/modules/links/dtos/ICreateLinkDTO";
import { Link } from "../../src/modules/links/entity/Link";
import { ILinkRepository } from "../../src/modules/links/repositories/ILinkRepository";


export class LinkRepositoryInMemory implements ILinkRepository {
  public links: Link[] = [];

  async create(data: ICreateLinkDTO): Promise<Link> {
    const link = new Link(data.title, data.url, data.description, data.user_id);

    this.links.push(link);

    return link;
  }

  
 
}