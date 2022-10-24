import { IRequesUserDTO } from "../../dtos/IResquestUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ITokenDTO } from "../../dtos/ITokenDTO";
import "dotenv/config";

export class LoginUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IRequesUserDTO): Promise<ITokenDTO> {
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      data.username
    );
    if (!usernameAlreadyExists) {
      throw new AppError("Username or password incorrect");
    }

    const passwordMatch = await compare(
      data.password,
      usernameAlreadyExists._password
    );

    if (!passwordMatch) {
      throw new AppError("User or password incorrect");
    }

    const hash = process.env.TOKEN_HASH as string;

    const token = sign({}, hash, {
      subject: usernameAlreadyExists._id,
      expiresIn: "20s",
    });

    return { token };
  }
}
