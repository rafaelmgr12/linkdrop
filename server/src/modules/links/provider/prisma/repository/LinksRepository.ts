import { prisma } from "./../../../../../config/prismaClient";
import { ICreateLinkDTO } from "modules/links/dtos/ICreateLinkDTO";
import { Link } from "modules/links/entity/Link";
import { ILinkRepository } from "modules/links/repositories/ILinkRepository";
import { AppError } from "errors/AppError";



export class LinkRepository implements ILinkRepository{
    async create(data: ICreateLinkDTO): Promise<Link> {
        const link = new Link(data.title, data.description, data.url, data.user_id);

        await prisma.link.create({
            data: {
                title: link._title,
                description: link._description,
                url: link._url,
                userId: link._user_id,
            },
        });
        
        return link;
    }
    async findAll(): Promise<any> {
        const links = await prisma.link.findMany();
        return links;
    }
    async findById(id: string): Promise<any> {
        const link = await prisma.link.findFirst({
            where: {
                id,
            },
        });
        return link;
    }

}