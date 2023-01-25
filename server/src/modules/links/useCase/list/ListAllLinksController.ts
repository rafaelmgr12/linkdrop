import { Request, Response } from "express";
import { ListAllLinksUseCase } from "./ListAllLinksUseCase";
import { LinkRepository } from 'modules/links/provider/prisma/repository/LinksRepository';



export class LinkAllLinksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllLinksUseCase = new ListAllLinksUseCase(new LinkRepository);
        const links = await listAllLinksUseCase.execute();
        return response.status(200).json(links);
    }
}