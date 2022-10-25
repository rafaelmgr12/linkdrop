import { sign } from "jsonwebtoken"
import "dotenv/config";

export class GenerateTokenProvider{
    public async execute(userId: string ): Promise<string>{
        const hash = process.env.TOKEN_HASH as string;

        const token = sign({}, hash, {
          subject: userId,
          expiresIn: "20s",
        });

        return token;
    }
}