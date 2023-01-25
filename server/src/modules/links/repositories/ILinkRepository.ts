import { Link } from "./../entity/Link";
import { ICreateLinkDTO } from "./../dtos/ICreateLinkDTO";
export interface ILinkRepository {
  create(data: ICreateLinkDTO): Promise<Link>;
  findAll(): Promise<Link[]>;
  findById(id: string): Promise<Link>;
}
