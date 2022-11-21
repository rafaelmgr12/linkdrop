import { GenerateTokenProvider } from "./../../provider/token/GenerateTokenProvider";
import { IRequesUserDTO } from "../../dtos/IResquestUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { ITokenDTO } from "../../dtos/ITokenDTO";

import { compare } from "bcrypt";

export class LoginUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IRequesUserDTO): Promise<ITokenDTO> {
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      data.username
    );
    if (!usernameAlreadyExists) {
      throw new AppError("Username or password incorrect");
    }

    let userPassword = usernameAlreadyExists.password;
    let userId = usernameAlreadyExists.id;
    if (!userPassword) {
      userPassword = usernameAlreadyExists._password;
      userId = usernameAlreadyExists._id;
    }

    const passwordMatch = await compare(data.password, userPassword);

    if (!passwordMatch) {
      throw new AppError("User or password incorrect");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userId);

    return { token };
  }
}
