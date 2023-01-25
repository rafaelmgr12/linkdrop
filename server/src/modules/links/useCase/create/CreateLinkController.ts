import { Request, Response } from 'express';
import { LinkRepository } from 'modules/links/provider/prisma/repository/LinksRepository';
import { CreateLinkUseCase } from './CreateLinkUseCase';


export class CreateLinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, url, user_id} = request.body;

        const createLinkUseCase = new CreateLinkUseCase(new LinkRepository);

        const link = await createLinkUseCase.execute({
            title,
            description,
            url,
            user_id,
        });

        return response.status(201).json(link);
    }
}