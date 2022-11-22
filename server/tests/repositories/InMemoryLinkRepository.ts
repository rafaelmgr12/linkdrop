import { ICreateLinkDTO } from "modules/links/dtos/ICreateLinkDTO";
import { Link } from "modules/links/entity/Link";
import { ILinkRepository } from "modules/links/repositories/ILinkRepository";


export class LinkRepositoryInMemory implements ILinkRepository {
  public links: Link[] = [];

  async create(data: ICreateLinkDTO): Promise<Link> {
    const link = new Link(data.title, data.url, data.description, data.user_id);

    this.links.push(link);

    return link;
  }

  
 
}