import { GenerateTokenProvider } from './../../provider/token/GenerateTokenProvider';
import { IRequesUserDTO } from "../../dtos/IResquestUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { ITokenDTO } from "../../dtos/ITokenDTO";


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

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(usernameAlreadyExists._id);


    return { token };
  }
}
